"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  const [username, setUsername] = useState("Jane Doe");
  const [email, setEmail] = useState("jane@example.com");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#D2F34C]">Settings</h1>

      <Card className="p-6 bg-[#3F634D] text-white space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings size={24} />
          <p className="font-semibold">Account Settings</p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#244034] text-white"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#244034] text-white"
          />
        </div>

        <Button className="bg-[#3C8968] hover:bg-[#244034] text-white mt-4">Save Changes</Button>
      </Card>
    </div>
  );
};

export default SettingsPage;
