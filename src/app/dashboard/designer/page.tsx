"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ProfileDropdown } from "@/components/ProfileDropDown";

const features = ["Overview", "Submissions", "Messages", "Settings"];

export default function DesignerDashboard() {
  const [activeFeature, setActiveFeature] = useState("Overview");
  const [loadingUser, setLoadingUser] = useState(true);
  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter();

  // Simulate user loading state
  useEffect(() => {
    if (user) setLoadingUser(false);
  }, [user]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error.message);
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.error("Unexpected logout error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-green-700 text-white">
      {/* Navbar */}
      <header className="bg-green-800 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Left: Logo + Features */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Your Logo</h1>
            <nav className="flex gap-4">
              {features.map((feature) => (
                <button
                  key={feature}
                  className={`px-3 py-1 rounded-md ${
                    activeFeature === feature
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-400/50"
                  }`}
                  onClick={() => setActiveFeature(feature)}
                >
                  {feature}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Notifications, Messages, Profile */}
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <FaBell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="relative cursor-pointer">
              <FaEnvelope size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            {/* Profile dropdown always visible */}
            <ProfileDropdown
              username={
                loadingUser
                  ? "Loading..."
                  : user?.user_metadata?.username || "Designer"
              }
              email={loadingUser ? "Loading..." : user?.email || "user@example.com"}
              onLogout={handleLogout}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {activeFeature === "Overview" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>
              Welcome back,{" "}
              {loadingUser
                ? "Loading..."
                : user?.user_metadata?.username || "Designer"}
              !
            </p>
            <p>Here you can see your quick stats and updates.</p>
          </div>
        )}

        {activeFeature === "Submissions" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Submissions</h2>
            <Button variant="default" size="sm">
              Create a Project
            </Button>
            <p className="mt-4">List of submitted designs will appear here.</p>
          </div>
        )}

        {activeFeature === "Messages" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <p>No messages yet.</p>
          </div>
        )}

        {activeFeature === "Settings" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>Update profile, change password, and manage preferences here.</p>
          </div>
        )}
      </main>
    </div>
  );
}
