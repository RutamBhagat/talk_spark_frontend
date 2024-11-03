import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-indigo-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="https://twitter.com/rutamstwt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-200"
          >
            <Twitter className="h-4 w-4" />
            <span>Introducing TalkSpark</span>
          </a>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Quick Conversation Starter for{" "}
            <span className="text-indigo-600">Engaging Interactions</span>
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Powered by Langchain Agents to provide tailored icebreakers and
            personal insights. Build meaningful connections with AI-powered
            conversation starters.
          </p>

          <div className="mt-10 flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
