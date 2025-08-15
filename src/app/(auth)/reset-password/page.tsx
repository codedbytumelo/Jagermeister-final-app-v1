"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  if (success) {
    return (
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 shadow-lg text-center text-[#1B4D3E]">
        <h2 className="text-2xl font-semibold mb-4">Password Reset Successful</h2>
        <p>
          You can now{" "}
          <a
            href="/login"
            className="text-[#E65C00] hover:text-[#FF6600] underline"
          >
            log in
          </a>{" "}
          with your new password.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#1B4D3E]">
        Reset Password
      </h2>

      {error && <p className="mb-4 text-red-600 text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
        />
        <button
          type="submit"
          className="w-full bg-[#E65C00] text-white py-2 rounded hover:bg-[#FF6600] transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
