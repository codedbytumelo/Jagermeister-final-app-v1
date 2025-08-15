import React from "react";

interface SharedSettingsProps {
  role: "designer" | "judge";
}

export default function SharedSettings({ role }: SharedSettingsProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Profile Section */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <p>Update your profile information here.</p>
        {/* Form fields for name, email, avatar, etc. */}
      </section>

      {/* Account Settings */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Account</h2>
        <p>Manage your login details, connected accounts, etc.</p>
      </section>

      {/* Change Password */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Change Password</h2>
        <p>Update your password for security.</p>
      </section>

      {/* Role-specific section */}
      {role === "designer" && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Designer Preferences</h2>
          <p>Manage portfolio visibility and design submission settings.</p>
        </section>
      )}

      {role === "judge" && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Judge Preferences</h2>
          <p>Manage judging criteria and notification settings.</p>
        </section>
      )}
    </div>
  );
}
