import Post from "@/app/components/Post";


async function fetchPostById(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const { id } = await params;
  const postData = await fetchPostById(id);

  return (
  <Post post={postData}/>
  );
}           