"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const Profile = () => {
  const profile = {
    name: "Jane Doe",
    email: "jane@example.com",
    category: "Streetwear Designer",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Profile</h1>
      <Card className="p-6 bg-[#3F634D] text-white space-y-3">
        <div className="flex items-center gap-4">
          <User size={40} />
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-gray-200">{profile.email}</p>
            <p className="text-sm text-gray-200">Category: {profile.category}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
