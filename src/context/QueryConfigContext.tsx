"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProviderProps = {
  children: React.ReactNode;
};

export default function QueryConfigContext({ children }: ProviderProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
