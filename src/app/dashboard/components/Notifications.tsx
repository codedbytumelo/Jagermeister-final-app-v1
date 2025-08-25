"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

const Notifications = () => {
  const notifications = [
    { title: "New Judge Assigned", date: "2025-08-25" },
    { title: "Project Deadline Reminder", date: "2025-08-24" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Notifications</h1>
      <div className="grid grid-cols-1 gap-4">
        {notifications.map((note, idx) => (
          <Card key={idx} className="p-4 bg-[#3F634D] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bell size={20} />
              <p>{note.title}</p>
            </div>
            <span className="text-gray-200 text-sm">{note.date}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
