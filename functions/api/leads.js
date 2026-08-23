/**
 * POST /api/leads
 *
 * Accepts lead form submissions as JSON. Returns structured JSON responses.
 * Required fields: name, phone. Optional: email, company, message.
 */

export async function onRequestPost({ request }) {
  // Validate content type
  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    return jsonError(415, 'UNSUPPORTED_MEDIA_TYPE',
      'Request body must be JSON.',
      'Set the Content-Type header to application/json and send a JSON body. See /openapi.json for the schema.');
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError(400, 'INVALID_JSON',
      'Could not parse the request body as JSON.',
      'Ensure the request body is valid JSON. See /openapi.json for the expected schema.');
  }

  // Validate required fields
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length === 0) {
    return jsonError(400, 'VALIDATION_ERROR',
      "The 'name' field is required and must be a non-empty string.",
      "Provide a JSON body with at least 'name' and 'phone' fields. See /openapi.json for the full schema.");
  }

  if (!body.phone || typeof body.phone !== 'string' || body.phone.trim().length < 10) {
    return jsonError(400, 'VALIDATION_ERROR',
      "The 'phone' field is required and must be at least 10 characters.",
      "Provide a phone number with country code, e.g. '+919793965272'. See /openapi.json for the full schema.");
  }

  // Validate optional email format if provided
  if (body.email && typeof body.email === 'string' && body.email.trim().length > 0) {
    if (!body.email.includes('@')) {
      return jsonError(400, 'VALIDATION_ERROR',
        "The 'email' field must be a valid email address.",
        "Provide a valid email address or omit the field. See /openapi.json for the full schema.");
    }
  }

  // Generate a simple lead ID
  const leadId = 'LEAD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

  // Acknowledge the lead (no backend storage yet – see implementation plan)
  return new Response(JSON.stringify({
    success: true,
    message: 'Your enquiry has been received. Our team will contact you within 24 hours.',
    leadId: leadId,
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

// Handle OPTIONS for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// Return structured JSON for unsupported methods (GET, PUT, DELETE, etc.)
export async function onRequest({ request }) {
  if (request.method === 'POST' || request.method === 'OPTIONS') return;
  return jsonError(405, 'METHOD_NOT_ALLOWED',
    `Method ${request.method} is not allowed on /api/leads. Use POST.`,
    'Send a POST request with a JSON body containing name and phone. See /openapi.json for the full API specification.');
}

function jsonError(status, code, message, resolution) {
  return new Response(JSON.stringify({
    error: { code, message, resolution },
  }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...(status === 405 ? { 'Allow': 'POST, OPTIONS' } : {}),
    },
  });
}
