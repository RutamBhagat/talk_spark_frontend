import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import OpenSource from "@/components/sections/open-source";
import Search from "@/components/sections/search";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 fixed top-0 left-0 right-0">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                <SparklesIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                TalkSpark
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="#search"
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
              >
                Search
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
              >
                Features
              </Link>
              <Link
                href="#opensource"
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
              >
                Open Source
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <Hero />
        <Search />
        <Features />
        <OpenSource />
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © 2024 TalkSpark. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
