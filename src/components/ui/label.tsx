import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // utility to merge classNames

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  variant?: "default" | "primary" | "dark" | "accent";
  className?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, children, required = false, variant = "default", className, ...props }, ref) => {
    const variantClasses = {
      default: "text-gray-700 dark:text-gray-300",
      primary: "text-[#FF6600]", // Jägermeister orange
      dark: "text-[#244034]", // dark green
      accent: "text-[#D2F34C]", // light yellow/green
    };

    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn("block text-sm font-medium", variantClasses[variant], className)}
        {...props}
      >
        {children} {required && <span className="text-[#FF6600]">*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
