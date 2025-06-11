import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/shared/Layout";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Home />
    </Layout>
  </QueryClientProvider>
);

export default App;
