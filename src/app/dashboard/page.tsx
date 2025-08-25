"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // for redirect
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquare, 
  Bell, 
  Megaphone, 
  User, 
  Settings, 
  LogOut 
} from "lucide-react";

import Projects from "@/app/dashboard/components/Projects";
import Messages from "@/app/dashboard/components/Messages";
import Notifications from "@/app/dashboard/components/Notifications";
import Announcements from "@/app/dashboard/components/Announcements";
import Profile from "@/app/dashboard/components/Profile";
import SettingsPage from "@/app/dashboard/components/SettingsPage";
import Overview from "@/app/dashboard/components/Overview";

export default function DashboardPage() {
  const [selected, setSelected] = useState("overview");
  const router = useRouter();

  const handleLogout = () => {
    // Example: clear local/session storage if needed
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Redirect to login page
    router.push("/login");
  };

  const menuItems = [
    { key: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { key: "projects", label: "Projects", icon: <FolderKanban size={18} /> },
    { key: "messages", label: "Messages", icon: <MessageSquare size={18} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { key: "announcements", label: "Announcements", icon: <Megaphone size={18} /> },
    { key: "profile", label: "Profile", icon: <User size={18} /> },
    { key: "settings", label: "Settings", icon: <Settings size={18} /> },
    { key: "logout", label: "Logout", icon: <LogOut size={18} /> },
  ];

  const renderContent = () => {
    switch (selected) {
      case "projects":
        return <Projects />;
      case "messages":
        return <Messages />;
      case "notifications":
        return <Notifications />;
      case "announcements":
        return <Announcements />;
      case "profile":
        return <Profile />;
      case "settings":
        return <SettingsPage />;
      case "overview":
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#244034] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3F634D] flex flex-col p-4">
        <h2 className="text-xl font-bold text-[#D2F34C] mb-6">Designer Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.key === "logout") {
                  handleLogout();
                } else {
                  setSelected(item.key);
                }
              }}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition ${
                selected === item.key
                  ? "bg-[#3C8968] text-[#D2F34C]"
                  : "hover:bg-[#244034]"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
}
