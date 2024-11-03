import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TPersonData } from "../search";

type Props = {
  setData: (data: TPersonData) => void;
  className?: string;
};

// API function
const fetchPersonData = async (name: string) => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/v1/talk_spark`;
  const response = await axios.post(endpoint, { person: name });
  return { ...response.data.bio, full_name: name } as TPersonData;
};

export default function DataForm({ className, setData }: Props) {
  const [name, setName] = React.useState<string>("");
  const queryClient = useQueryClient();

  // Setup mutation
  const mutation = useMutation({
    mutationFn: (name: string) => fetchPersonData(name),
    onMutate: () => {
      toast.loading("Sparking the conversation...", { id: "spark-toast" });
    },
    onSuccess: (data) => {
      setData(data);
      toast.success("Found conversation sparks!", {
        id: "spark-toast",
        description: `Ready to connect with ${data.full_name}`,
      });

      // Cache the result
      queryClient.setQueryData(["person", data.full_name], data);

      // Clear input
      setName("");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch data";
        toast.error("Something went wrong", {
          id: "spark-toast",
          description: errorMessage,
        });
      } else {
        toast.error("An unexpected error occurred", {
          id: "spark-toast",
        });
      }
    },
  });

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error("Please enter a name");
      return;
    }

    mutation.mutate(name);
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
                if (e.key === "Enter" && !mutation.isPending) {
                  handleSubmit();
                }
              }}
              type="text"
              placeholder="Enter a name (e.g., Andrew NG)"
              className="pl-9"
              disabled={mutation.isPending}
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={mutation.isPending}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
          >
            {mutation.isPending ? "Sparking..." : "Spark the Conversation"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
