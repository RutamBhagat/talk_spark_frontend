"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import axios, { isAxiosError } from "axios";
import type { TPersonData } from "../search";

type Props = {
  setData: (data: TPersonData) => void;
  className?: string;
};

export default function DataForm({ className, setData }: Props) {
  const [name, setName] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const submit = async () => {
    setLoading(true);
    setName("");
    // const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/talk_spark/process`;
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/talk_spark`;
    try {
      const response = await axios.post(endpoint, { person: name });
      const data = { ...response.data.bio, full_name: name } as TPersonData;
      setData(data);
      console.log("Output: ", data);
    } catch (error) {
      if (isAxiosError(error)) {
        // The error is an Axios error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error response:", error.response.data);
          console.error("Error status:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
      } else {
        // The error is not an Axios error
        console.error("Non-Axios error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${className} mx-auto mb-8 max-w-md rounded-lg bg-white`}>
      <div className="w-full ">
        <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight transition-colors">
          Ignite Meaningful Connections
        </h2>
      </div>
      <p className="mb-6 text-center text-gray-600">
        Enter a name to discover personalized icebreakers and conversation starters.
      </p>
      <div className="mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
          type="text"
          placeholder="Enter a name (e.g., Andrew NG)"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none"
        />
      </div>
      <Button
        onClick={submit}
        type="submit"
        className="w-full rounded-md bg-black px-4 py-2 font-semibold text-white transition duration-300 hover:bg-gray-800"
        isLoading={loading}
      >
        Spark the Conversation
      </Button>
    </div>
  );
}
