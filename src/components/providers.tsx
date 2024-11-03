"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./ui/sonner";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Toaster />
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  );
}
