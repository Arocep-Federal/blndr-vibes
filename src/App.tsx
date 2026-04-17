import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./pages/app/Dashboard.tsx";
import Mixer from "./pages/app/Mixer.tsx";
import Library from "./pages/app/Library.tsx";
import Blends from "./pages/app/Blends.tsx";
import BatchPlanner from "./pages/app/BatchPlanner.tsx";
import Inventory from "./pages/app/Inventory.tsx";
import Settings from "./pages/app/Settings.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/mixer" element={<Mixer />} />
          <Route path="/app/library" element={<Library />} />
          <Route path="/app/blends" element={<Blends />} />
          <Route path="/app/batch" element={<BatchPlanner />} />
          <Route path="/app/inventory" element={<Inventory />} />
          <Route path="/app/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
