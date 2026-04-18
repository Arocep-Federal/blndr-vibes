import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Mixer from "./pages/app/Mixer.tsx";
import Library from "./pages/app/Library.tsx";
import Blends from "./pages/app/Blends.tsx";
import BatchPlanner from "./pages/app/BatchPlanner.tsx";
import Inventory from "./pages/app/Inventory.tsx";
import Settings from "./pages/app/Settings.tsx";
import Lab from "./pages/marketing/Lab.tsx";
import Chandler from "./pages/marketing/Chandler.tsx";
import Vault from "./pages/marketing/Vault.tsx";
import FieldManual from "./pages/marketing/FieldManual.tsx";
import Dossiers from "./pages/marketing/Dossiers.tsx";
import Pricing from "./pages/marketing/Pricing.tsx";
import Manifesto from "./pages/marketing/Manifesto.tsx";
import Contact from "./pages/marketing/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Marketing pages */}
          <Route path="/lab" element={<Lab />} />
          <Route path="/chandler" element={<Chandler />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/field-manual" element={<FieldManual />} />
          <Route path="/dossiers" element={<Dossiers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contact" element={<Contact />} />
          {/* App */}
          <Route path="/app" element={<Navigate to="/app/mixer" replace />} />
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
