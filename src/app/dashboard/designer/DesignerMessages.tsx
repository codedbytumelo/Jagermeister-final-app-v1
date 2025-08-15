"use client";

import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  content: string;
}

export default function DesignerMessages() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "Admin", content: "Welcome to the platform!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "Designer", content: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>

      <div className="flex-1 overflow-y-auto border rounded-md p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-md ${
              msg.sender === "Designer" ? "bg-orange-100 self-end" : "bg-gray-100"
            }`}
          >
            <span className="font-semibold">{msg.sender}: </span>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg p-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
