"use client";

import * as React from "react";
import { Menu } from "@headlessui/react";

// DropdownMenu wrapper
export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Menu as="div" className="relative inline-block text-left">{children}</Menu>;
};

// DropdownMenuTrigger wrapper
export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Menu.Button className={className}>
      {children}
    </Menu.Button>
  );
};

// DropdownMenuContent wrapper
export const DropdownMenuContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Menu.Items className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${className}`}>
      {children}
    </Menu.Items>
  );
};

// DropdownMenuItem wrapper
interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, ...props }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-gray-100" : ""
          } w-full text-left px-4 py-2 flex items-center gap-2 text-gray-800`}
          {...props}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
