"use client";

import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LeftPanelProps = {
  show?: boolean;
  title?: string;
  features?: string[];
  backgroundGradient?: string;
  iconApp?: React.ReactNode; // ✅ fixed
};

type AuthForm2Props = {
  authForm: "signIn" | "signUp";
  appName: string;
  iconApp?: React.ReactNode; // ✅ fixed
  onSubmit: (data: { name?: string; email: string; password: string }) => void;
  leftPanel?: LeftPanelProps;
  authButtons?: {
    google?: { enable: boolean };
    gitHub?: { enable: boolean };
    apple?: { enable: boolean };
  };
  urls?: {
    signInFooterLink?: string;
    termsOfService?: string;
    privacyOfPolicy?: string;
  };
};

export default function AuthForm2({
  authForm,
  appName,
  iconApp,
  onSubmit,
  leftPanel,
  authButtons,
  urls,
}: AuthForm2Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden flex">
      {/* Left Panel */}
      {leftPanel?.show && (
        <div
          className={twMerge(
            "hidden md:flex flex-col justify-center items-center p-10 text-white w-1/2",
            leftPanel.backgroundGradient
          )}
        >
          {leftPanel.iconApp && <div className="mb-6">{leftPanel.iconApp}</div>}
          <h2 className="text-3xl font-bold mb-4">{leftPanel.title}</h2>
          <ul className="space-y-2 text-lg">
            {leftPanel.features?.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Auth Form */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          {iconApp}
          <h1 className="text-2xl font-bold">{appName}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authForm === "signUp" && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            {authForm === "signUp" ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Auth Buttons */}
        <div className="mt-6 space-y-2">
          {authButtons?.google?.enable && (
            <button className="w-full border p-3 rounded-lg">Continue with Google</button>
          )}
          {authButtons?.gitHub?.enable && (
            <button className="w-full border p-3 rounded-lg">Continue with GitHub</button>
          )}
          {authButtons?.apple?.enable && (
            <button className="w-full border p-3 rounded-lg">Continue with Apple</button>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-sm text-center text-gray-500">
          {authForm === "signUp" ? (
            <>
              Already have an account?{" "}
              <Link href={urls?.signInFooterLink || "/signin"} className="text-primary font-medium">
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Link href="/signup" className="text-primary font-medium">
                Sign Up
              </Link>
            </>
          )}
          <div className="mt-2">
            <Link href={urls?.termsOfService || "#"} className="mx-2">
              Terms
            </Link>
            |
            <Link href={urls?.privacyOfPolicy || "#"} className="mx-2">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
