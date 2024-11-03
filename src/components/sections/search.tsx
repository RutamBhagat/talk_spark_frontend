"use client";
import React from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
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

// API function for fetching person data
const fetchPersonData = async (name: string): Promise<TPersonData> => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/v1/talk_spark`;
  const response = await axios.post(endpoint, { person: name });

  // Ensure only plain object data is returned by selecting specific properties
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

  // Mutation setup for data fetching
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

      // Cache the result
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
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {data === undefined ? (
          <div className="mx-auto max-w-lg">
            <DataForm setData={mutation.mutate} />
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
              <div className="space-y-6">
                <DataForm setData={mutation.mutate} />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-indigo-100 p-3">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/8483/8483624.png"
                          alt="Profile"
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {data.full_name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-600">{data.summary}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <img
                        src="https://img.icons8.com/?size=512&id=sMELDDj7ZcpJ&format=png"
                        alt="Topics"
                        className="h-6 w-6"
                      />
                      Topics of Interest
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-full">
                      <div className="flex flex-wrap gap-2">
                        {data.topics_of_interest
                          .split(",")
                          .map((topic, index) => (
                            <Badge key={index} variant="secondary">
                              {topic.trim()}
                            </Badge>
                          ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5167/5167414.png"
                        alt="Facts"
                        className="h-6 w-6"
                      />
                      Interesting Facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <ul className="space-y-2">
                        {data.interesting_facts.map((fact, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-indigo-500">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11531/11531272.png"
                        alt="Ice Breakers"
                        className="h-6 w-6"
                      />
                      Ice Breakers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <ul className="space-y-4">
                        {data.ice_breakers.map((breaker, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-indigo-500">•</span>
                            <span>{breaker}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
