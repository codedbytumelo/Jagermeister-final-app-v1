import * as React from "react";
import { type VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";



// Define button variants
const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default: "bg-orange-500 text-white hover:bg-orange-600",
      outline: "border border-white text-white hover:bg-white/10",
      ghost: "bg-transparent hover:bg-white/10 text-white",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3",
      lg: "h-12 px-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});


// Fix: ButtonProps is now used
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

// Use ButtonProps as the type for the component props
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
