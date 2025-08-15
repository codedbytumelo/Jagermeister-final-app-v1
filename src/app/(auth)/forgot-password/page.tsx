"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`, // Where the user will reset their password
      });

      if (error) {
        setError(error.message);
      } else {
        setSubmitted(true);
        setEmail("");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 rounded-2xl shadow-lg"
      style={{ backgroundColor: "#2E6E4D" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Forgot Password
      </h2>

      {!submitted ? (
        <>
          <p className="mb-6 text-white text-center">
            Enter your email to receive a password reset link.
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md px-4 py-3 mb-5 border border-white/30 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]"
          />

          {error && (
            <p className="mb-5 text-center text-[#FF9966] font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E65C00] hover:bg-[#FF6600] text-white font-semibold py-3 rounded-md transition"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p className="mt-6 text-center text-white">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="text-[#E65C00] hover:text-[#FF6600] font-semibold"
            >
              Login
            </Link>
          </p>
        </>
      ) : (
        <p className="text-center text-[#FF9966] font-semibold">
          If an account with that email exists, a reset link has been sent.
        </p>
      )}
    </form>
  );
}
