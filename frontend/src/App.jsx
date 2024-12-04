import React from "react";
import RoutesCustomer from "./RoutesCustomer";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <div >
      <QueryClientProvider client={queryClient}>
        <RoutesCustomer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
