import { Routes, Route } from "react-router";
import { Toaster } from "sonner";
import Navigation from "@/components/layout/Navigation";
import Home from "@/pages/Home";
import Feed from "@/pages/Feed";
import Shop from "@/pages/Shop";
import Messages from "@/pages/Messages";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import AIAgent from "@/pages/AIAgent";
import Leaderboard from "@/pages/Leaderboard";
import Downloads from "@/pages/Downloads";
import NotFound from "@/pages/NotFound";
import { TrpcProvider } from "@/providers/trpc";
import { useEffect } from "react";
import { seedData } from "@/lib/localDb";

function AppContent() {
  // Seed data on first load
  useEffect(() => {
    seedData();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#23262a",
            border: "1px solid rgba(201,169,110,0.15)",
            color: "#e8e6e3",
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <TrpcProvider>
      <AppContent />
    </TrpcProvider>
  );
}
