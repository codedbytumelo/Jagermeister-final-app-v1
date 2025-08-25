"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

const Announcements = () => {
  const announcements = [
    { title: "Design Competition Starts!", date: "2025-08-20" },
    { title: "Judges Feedback Released", date: "2025-08-22" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Announcements</h1>
      <div className="grid grid-cols-1 gap-4">
        {announcements.map((ann, idx) => (
          <Card key={idx} className="p-4 bg-[#3F634D] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Megaphone size={20} />
              <p>{ann.title}</p>
            </div>
            <span className="text-gray-200 text-sm">{ann.date}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
