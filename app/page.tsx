import Link from "next/link";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}



export default async function Home() {

  const posts = await fetchPosts();
  console.log(posts);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Main Page
      </h1>
      {posts.map((post: any) => (
        <div key={post.id} className="max-w-md p-4 bg-zinc-100 dark:bg-zinc-700 text-black dark:text-zinc-50 mb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
}
