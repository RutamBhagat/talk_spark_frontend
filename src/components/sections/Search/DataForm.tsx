"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { toast } from "sonner";

type Props = {
  setData: (name: string) => void;
  className?: string;
};

export default function DataForm({ className, setData }: Props) {
  const [name, setName] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter a name", {
        description: "We need a name to spark the conversation!",
      });
      return;
    }
    setIsLoading(true);
    try {
      await setData(name);
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      className={`${className} bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-grid-indigo-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      <CardHeader className="space-y-4 relative">
        <CardTitle className="flex items-center justify-center space-x-3 text-3xl font-bold text-gray-900">
          <Sparkles className="h-8 w-8 text-indigo-600 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Ignite Connections
          </span>
        </CardTitle>
        <p className="text-center text-lg text-gray-600 max-w-md mx-auto">
          Enter a name to uncover personalized icebreakers and spark engaging
          conversations.
        </p>
      </CardHeader>
      <CardContent className="relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform group-focus-within:scale-110" />
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter a name (e.g., Andrew NG)"
              className="pl-10 h-14 text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300 rounded-lg"
              aria-label="Enter name"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full h-14 text-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 rounded-lg relative overflow-hidden ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            <span className="relative z-10">
              {isLoading ? "Sparking..." : "Spark the Conversation"}
            </span>
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
