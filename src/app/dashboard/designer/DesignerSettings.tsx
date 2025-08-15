"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  notifications: boolean;
  publicProfile: boolean;
}

export default function DesignerSettings() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    notifications: false,
    publicProfile: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.currentTarget;
    const value =
      type === "checkbox"
        ? (e.currentTarget as HTMLInputElement).checked
        : e.currentTarget.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Saved settings:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border rounded-lg w-full p-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded-lg w-full p-2"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border rounded-lg w-full p-2"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          Enable notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="publicProfile"
            checked={formData.publicProfile}
            onChange={handleChange}
          />
          Make profile public
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
