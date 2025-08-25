"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { FolderKanban, User, MessageSquare, Bell } from "lucide-react";

const Overview = () => {
  // Example data for stats
  const stats = [
    { label: "Projects Submitted", value: 8, icon: <FolderKanban size={24} /> },
    { label: "Messages", value: 12, icon: <MessageSquare size={24} /> },
    { label: "Notifications", value: 5, icon: <Bell size={24} /> },
    { label: "Profile Completeness", value: "80%", icon: <User size={24} /> },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 flex items-center gap-4 bg-[#3C8968] text-white">
            <div className="p-3 rounded-lg bg-[#244034]">{stat.icon}</div>
            <div>
              <p className="text-lg font-semibold">{stat.value}</p>
              <p className="text-sm text-gray-200">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-[#3F634D]">
        <h2 className="text-xl font-bold mb-2">Recent Projects</h2>
        <p className="text-gray-200">You have 3 projects awaiting review by the judges.</p>
      </Card>
    </div>
  );
};

export default Overview;
