"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
    <Card className={`${className} w-full shadow-lg`}>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Ignite Meaningful Connections
        </CardTitle>
        <p className="text-center text-sm text-gray-600">
          Enter a name to discover personalized icebreakers and conversation
          starters.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
              className="pl-9"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
          >
            Spark the Conversation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
