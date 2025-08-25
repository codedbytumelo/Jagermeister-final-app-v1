import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "primary" | "dark" | "accent";
  error?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", error = false, className, ...props }, ref) => {
    const variantClasses = {
      default: "bg-[#244034] text-white border-[#3C8968] placeholder-[#D2F34C]",
      primary: "bg-[#244034] text-[#FF6600] border-[#FF6600] placeholder-[#FF6600]",
      dark: "bg-[#3C8968] text-white border-[#3F634D] placeholder-[#D2F34C]",
      accent: "bg-[#D2F34C] text-black border-[#244034] placeholder-[#244034]",
    };

    const errorClasses = error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "focus:ring-[#FF6600] focus:border-[#FF6600]"; // brand orange focus

    return (
      <input
        ref={ref}
        className={cn(
          "block w-full rounded-3xl p-3 h-10 transition-all border focus:outline-none",
          variantClasses[variant],
          errorClasses,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
