import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import OpenSource from "@/components/sections/open-source";
import Search from "@/components/sections/search";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="h-full pt-10 pl-10 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4250/4250219.png"
            alt="TalkSpark logo"
            width="30"
            height="30"
            className="mr-2 rounded-sm object-contain"
          />
          <p>TalkSpark</p>
        </Link>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
        <Hero />
        <Search />
        <Features />
        <OpenSource />
      </main>
    </>
  );
}
