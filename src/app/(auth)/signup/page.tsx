"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: null as File | null,
    category: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, checked, files } = e.target as HTMLInputElement;
    if (name === "profilePic" && files) {
      setFormData({ ...formData, profilePic: files[0] });
    } else if (name === "termsAccepted") {
      setFormData({ ...formData, termsAccepted: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Please check your email.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#244034]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#3F634D] p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-[#D2F34C]">Sign Up</h1>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-[#D2F34C]">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#244034] text-white border-[#3C8968]"
          />
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password" className="text-[#D2F34C]">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-[#244034] text-white border-[#3C8968]"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword" className="text-[#D2F34C]">
            Confirm Password
          </Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="bg-[#244034] text-white border-[#3C8968]"
          />
        </div>

        {/* Profile Pic */}
        <div>
          <Label htmlFor="profilePic" className="text-[#D2F34C]">
            Profile Picture
          </Label>
          <Input
            type="file"
            name="profilePic"
            id="profilePic"
            accept="image/*"
            onChange={handleChange}
            className="bg-[#244034] text-white border-[#3C8968]"
          />
        </div>

        {/* Category */}
        <div>
          <Label htmlFor="category" className="text-[#D2F34C]">
            Category
          </Label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-[#244034] text-white border border-[#3C8968]"
          >
            <option value="">Select Category</option>
            <option value="streetwear">Streetwear</option>
            <option value="formal">Formal Wear</option>
            <option value="casual">Casual</option>
            <option value="avantgarde">Avant-Garde</option>
          </select>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 pt-3">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="accent-[#D2F34C] w-4 h-4"
          />
          <Label htmlFor="termsAccepted" className="text-sm text-white">
            I have read and agree to the{" "}
            <a href="/terms" className="underline text-[#D2F34C]">
              Terms & Conditions
            </a>
          </Label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full text-white h-10 bg-[#3C8968] hover:bg-[#D2F34C] hover:text-[#244034] font-semibold"
          disabled={!formData.termsAccepted}
        >
          Sign Up
        </Button>

        {/* Already have account */}
        <p className="text-center text-sm text-white pt-2">
          Have an account?{" "}
          <a href="/login" className="underline text-[#D2F34C]">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
