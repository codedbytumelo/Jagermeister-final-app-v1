"use client";

import { useState } from "react";
import {
  Users,
  MessageCircle,
  Bell,
  Settings,
  LogOut,
  User,
  BarChart2,
  FolderPlus,
  Megaphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import feature components
import Projects from "@/app/dashboard/components/Projects";
import Messages from "@/app/dashboard/components/Messages";
import Notifications from "@/app/dashboard/components/Notifications";
import Announcements from "@/app/dashboard/components/Announcements";
import Profile from "@/app/dashboard/components/Profile";
import SettingsPage from "@/app/dashboard/components/SettingsPage";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "projects", label: "Projects", icon: FolderPlus },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "announcements", label: "Announcements", icon: Megaphone },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "projects":
        return <Projects />;
      case "messages":
        return <Messages />;
      case "notifications":
        return <Notifications />;
      case "announcements":
        return <Announcements />;
      case "settings":
        return <SettingsPage />;
      case "logout":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-600">You have logged out.</h2>
            <p className="text-gray-400">See you next time!</p>
          </div>
        );
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex h-screen bg-[#244034] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3C8968] p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-[#D2F34C] mb-6">Designer Dashboard</h1>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-xl transition",
                  activeTab === item.id
                    ? "bg-[#D2F34C] text-black"
                    : "hover:bg-[#3F634D]"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
}
