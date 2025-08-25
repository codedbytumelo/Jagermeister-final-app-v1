"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";

const LoginHeader = () => {
  const LogoPlaceholder = () => (
    <div className="flex justify-center mb-4">
      <span className="font-bold bg-[#3C8968] size-10 rounded-md text-white flex justify-center items-center">
        <Lock />
      </span>
    </div>
  );

  return (
    <CardHeader className="space-y-1">
      <LogoPlaceholder />
      <CardTitle className="text-center text-2xl text-[#D2F34C]">
        Welcome Back
      </CardTitle>
      <CardDescription className="text-center text-white/70">
        Enter your email and password to continue.
      </CardDescription>
    </CardHeader>
  );
};

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        router.push("/dashboard/designer");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#244034]">
      <form onSubmit={handleLogin}>
        <Card className="w-[520px] p-6 bg-[#3F634D] border-none text-white">
          <LoginHeader />

          <CardContent className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#D2F34C]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#244034] text-white border-[#3C8968]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#D2F34C]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-[#244034] text-white border-[#3C8968]"
              />
            </div>

            {error && (
              <p className="text-center text-[#FF9966] font-semibold">{error}</p>
            )}

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm underline text-[#D2F34C] hover:text-[#E65C00]"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-6">
            <Button
              type="submit"
              className="w-full text-white h-10 bg-[#3C8968] hover:bg-[#D2F34C] hover:text-[#244034] font-semibold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In"}
            </Button>

            <p className="text-center text-sm text-white">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="underline text-[#D2F34C] hover:text-[#E65C00]"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignInPage;
