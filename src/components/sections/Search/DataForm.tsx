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

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error("Please enter a name");
      return;
    }
    setData(name);
  };

  return (
    <Card
      className={`${className} shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <CardHeader className="space-y-2">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-semibold text-gray-900">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          Ignite Meaningful Connections
        </CardTitle>
        <p className="text-center text-base text-gray-600">
          Enter a name to discover personalized icebreakers and conversation
          starters.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              type="text"
              placeholder="Enter a name (e.g., Andrew NG)"
              className="pl-9 h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
          >
            Spark the Conversation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
