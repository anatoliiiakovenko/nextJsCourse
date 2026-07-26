export async function GET(request){
    const data = {
        name: "John Doe",
        age: 30,
        bio: "Software developer and tech enthusiast.",
        message: "Hello from the API route!",
    };

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request){
    return new Response(request.body);
}