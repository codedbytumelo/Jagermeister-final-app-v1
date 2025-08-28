"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { MdBolt } from "react-icons/md";

// Form validation schemas
const signInFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

// Left panel component
function LeftPanel({ title = "Welcome Back!", backgroundGradient = "bg-[#244034]/90" }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`hidden lg:flex lg:w-1/2 ${backgroundGradient} text-white p-12 flex-col justify-center rounded-l-2xl`}>
      <div className="text-center">
        <MdBolt size={64} className="mx-auto mb-4 text-[#d2f34c]" />
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {showText && <p className="text-sm opacity-80">Access your account and continue your shopping journey!</p>}
      </div>
    </div>
  );
}

// Sign-in form component
function SignInForm({
  buttonElement = { text: "Sign In" },
  urls = { signUpFooterLink: "/shop/signup" },
  onSubmit,
}: {
  buttonElement?: { text?: string; attributes?: ButtonHTMLAttributes<HTMLButtonElement> };
  urls?: { signUpFooterLink?: string };
  onSubmit?: (values: SignInFormData) => void;
}) {
  const { handleSubmit, setValue, watch, clearErrors, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("email", e.target.value);
    clearErrors("email");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("password", e.target.value);
    clearErrors("password");
  };

  const handleFormSubmit = handleSubmit((values) => {
    onSubmit?.(values);
  });

  return (
    <div className="flex max-w-7xl h-[96%] w-full shadow-lg rounded-3xl overflow-hidden">
      <LeftPanel />

      <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center bg-white rounded-r-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#244034]">Sign In</h1>
          <p className="text-sm text-[#244034]/70 mt-2">Enter your email and password to access your account.</p>
        </div>

        <div className="max-w-sm mx-auto space-y-4">
          {/* Social auth buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 h-12 border rounded-xl flex justify-center items-center gap-2">
              <FcGoogle className="h-5 w-5" /> Google
            </Button>
            <Button className="flex-1 h-12 border rounded-xl flex justify-center items-center gap-2">
              <FaApple className="h-5 w-5" /> Apple
            </Button>
            <Button className="flex-1 h-12 border rounded-xl flex justify-center items-center gap-2">
              <FaGithub className="h-5 w-5" /> GitHub
            </Button>
          </div>

          <div className="relative my-4">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-[#244034]/70">
              Or use email
            </span>
            <div className="border-t border-[#244034]/40 mt-3"></div>
          </div>

          {/* Email & Password */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#244034]">Email</label>
              <Input
                placeholder="john@example.com"
                className="p-4 rounded-xl h-12 border border-[#244034]/40"
                value={watch("email")}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#244034]">Password</label>
              <Input
                placeholder="minimum 8 characters"
                type="password"
                className="p-4 rounded-xl h-12 border border-[#244034]/40"
                value={watch("password")}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.password.message}
                </span>
              )}
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl bg-[#244034] text-[#d2f34c] font-bold hover:brightness-110">
              {buttonElement?.text}
            </Button>
          </form>

          <p className="text-sm text-center text-[#244034]/70 mt-4">
            Don’t have an account?{" "}
            <a href={urls.signUpFooterLink} className="text-[#d2f34c] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <SignInForm buttonElement={{ text: "Sign In" }} />;
}
