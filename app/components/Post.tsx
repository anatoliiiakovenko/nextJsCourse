import Link from "next/link";

const Post = ({ post }: { post: any }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Link href="/" className="text-blue-500 hover:underline mb-4">
          Back to Home
        </Link>
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
};

export default Post;