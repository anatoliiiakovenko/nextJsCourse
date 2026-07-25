import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-100 dark:bg-zinc-800">
      <div className="flex justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-black dark:text-zinc-50">
          My App
        </Link>
        <nav>
            <Link href="/" className="text-black dark:text-zinc-50 ml-4">
              Home
            </Link>
            <Link href="/about" className="text-black dark:text-zinc-50 ml-4">
              About
            </Link>
          </nav>
    
      </div>
    </header>
  );
}
