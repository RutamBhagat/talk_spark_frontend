"use client";
import React from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { User, Lightbulb, Sparkles, MessageCircle } from "lucide-react";
import DataForm from "./Search/DataForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export type TPersonData = {
  summary: string;
  interesting_facts: string[];
  topics_of_interest: string;
  ice_breakers: string[];
  full_name: string;
};

const fetchPersonData = async (name: string): Promise<TPersonData> => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/v1/talk_spark`;
  const response = await axios.post(endpoint, { person: name });
  const { summary, interesting_facts, topics_of_interest, ice_breakers } =
    response.data.bio;
  return {
    summary,
    interesting_facts,
    topics_of_interest,
    ice_breakers,
    full_name: name,
  };
};

export default function SearchContent() {
  const [data, setData] = React.useState<TPersonData | undefined>(undefined);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchPersonData,
    onMutate: () => {
      toast.loading("Sparking the conversation...", { id: "spark-toast" });
    },
    onSuccess: (data) => {
      setData(data);
      toast.success("Found conversation sparks!", {
        id: "spark-toast",
        description: `Ready to connect with ${data.full_name}`,
      });
      queryClient.setQueryData(["person", data.full_name], data);
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
        toast.error("An unexpected error occurred", { id: "spark-toast" });
      }
    },
  });

  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white py-8">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl space-y-4">
          <DataForm setData={mutation.mutate} />

          {data && (
            <div className="space-y-4 transition-all duration-300">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                      <User className="h-8 w-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                      {data.full_name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-gray-600">
                    {data.summary}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                    <Sparkles className="h-6 w-6 text-indigo-600" />
                    Topics of Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="max-h-[200px]">
                    <div className="flex flex-wrap gap-2">
                      {data.topics_of_interest
                        .split(",")
                        .map((topic, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
                          >
                            {topic.trim()}
                          </Badge>
                        ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                    <Lightbulb className="h-6 w-6 text-indigo-600" />
                    Interesting Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="max-h-[300px]">
                    <ul className="space-y-3">
                      {data.interesting_facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                          <span className="text-base leading-relaxed text-gray-600">
                            {fact}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                    <MessageCircle className="h-6 w-6 text-indigo-600" />
                    Ice Breakers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="max-h-[300px]">
                    <ul className="space-y-3">
                      {data.ice_breakers.map((breaker, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                          <span className="text-base leading-relaxed text-gray-600">
                            {breaker}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
