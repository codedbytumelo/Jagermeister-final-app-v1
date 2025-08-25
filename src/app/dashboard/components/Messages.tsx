"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Messages = () => {
  const messages = [
    { from: "Judge A", content: "Your project looks great!", date: "2025-08-25" },
    { from: "Judge B", content: "Please update your portfolio.", date: "2025-08-24" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Messages</h1>
      <div className="grid grid-cols-1 gap-4">
        {messages.map((msg, idx) => (
          <Card key={idx} className="p-4 bg-[#3F634D] text-white flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h2 className="font-semibold">{msg.from}</h2>
              <span className="text-gray-200 text-sm ml-auto">{msg.date}</span>
            </div>
            <p className="text-gray-200">{msg.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Messages;
