import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OpenSource() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Open Source for Open Conversations
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            TalkSpark is an open source project, fostering collaboration and
            transparency in facilitating connections between people.
          </p>
          <Button
            asChild
            className="mt-8 bg-gray-900 hover:bg-gray-800 text-white"
          >
            <Link
              href="https://github.com/RutamBhagat/talk_spark_langgraph"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
