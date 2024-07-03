import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import About from "./pages/About.jsx"; // Import the new About page
import Index from "./pages/Index.jsx";
import TradingJournal from "./pages/TradingJournal.jsx"; // Import the new Trading Journal page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard", // Renamed from "Home"
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About", // New navigation item
    to: "/about",
    icon: <Home className="h-4 w-4" />, // Placeholder icon
  },
  {
    title: "Trading Journal", // New navigation item
    to: "/trading-journal",
    icon: <Home className="h-4 w-4" />, // Placeholder icon
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about" element={<About />} /> {/* New route */}
              <Route path="trading-journal" element={<TradingJournal />} /> {/* New route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;