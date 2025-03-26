export function GET(request) {
  console.log("API GET request", request);

  // return Response.json();
  return new Response('Hello!');
}

// export function POST(request) {}