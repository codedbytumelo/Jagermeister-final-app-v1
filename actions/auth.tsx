"use client";

import { useState } from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utilis/supabase/client";
import { headers } from "next/headers";

export default function Auth() {
  const supabase = createClient(); // create a new supabase client instance
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let res;
      if (isLogin) {
        res = await supabase.auth.signInWithPassword({ email, password });
      } else {
        res = await supabase.auth.signUp({ email, password });
      }

      if (res.error) {
        setError(res.error.message);
      } else {
        // Revalidate any pages that depend on auth state
        revalidatePath("/");

        if (isLogin) {
          redirect("/dashboard");
        } else {
          alert("Check your email to confirm your account!");
          redirect("/login");
        }
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#2E6E4D" }}>
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <form onSubmit={handleAuth}>
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
          className="w-full rounded-md px-4 py-3 mb-5 border border-white/30 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]"
        />

        {error && (
          <p className="mb-5 text-center text-[#FF9966] font-semibold">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E65C00] hover:bg-[#FF6600] text-white font-semibold py-3 rounded-md transition"
        >
          {loading ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="mt-6 text-center text-white">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#E65C00] hover:text-[#FF6600] font-semibold"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
