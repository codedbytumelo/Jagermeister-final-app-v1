"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import LogInNavbar from "@/sections/LogInNavbar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        // Only redirect if login succeeds
        router.push("/dashboard/designer");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LogInNavbar />
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto mt-8 p-8 rounded-2xl shadow-lg pb-16"
        style={{ backgroundColor: "#2E6E4D" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Designer Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md px-4 py-3 mb-5 border border-white/30 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-md px-4 py-3 mb-1 border border-white/30 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]"
        />

        <div className="mb-5 text-right">
          <Link
            href="/forgot-password"
            className="text-[#E65C00] hover:text-[#FF6600] font-semibold text-sm"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <p className="mb-5 text-center text-[#FF9966] font-semibold">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E65C00] hover:bg-[#FF6600] text-white font-semibold py-3 rounded-md transition"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="mt-6 text-center text-white">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#E65C00] hover:text-[#FF6600] font-semibold"
          >
            Signup
          </Link>
        </p>
      </form>
    </>
  );
}
