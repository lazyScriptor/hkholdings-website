import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RoutesCustomer from "./RoutesCustomer";

/**
 * Created once at module scope. Building it inside the component body made a
 * brand new client on every render, which threw away the cache and re-fired
 * every query.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 60_000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesCustomer />
    </QueryClientProvider>
  );
}

export default App;
