"use client";

import * as React from "react";
import { Menu } from "@headlessui/react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ProfileDropdownProps {
  username: string;
  email: string;
  onLogout: () => void;
}

export function ProfileDropdown({
  username,
  email,
  onLogout,
}: ProfileDropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Trigger button */}
      <Menu.Button as={Button} variant="ghost" className="flex items-center gap-2">
        <FaUser />
        <span className="truncate max-w-[120px]">{username}</span>
      </Menu.Button>

      {/* Dropdown items */}
      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="px-4 py-2 border-b">
          <p className="font-semibold text-gray-900 truncate">{username}</p>
          <p className="text-sm text-gray-500 truncate">{email}</p>
        </div>

        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-gray-100" : ""
              } w-full text-left px-4 py-2 flex items-center gap-2 text-gray-800`}
            >
              <FaCog /> Settings
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              onClick={onLogout}
              className={`${
                active ? "bg-gray-100" : ""
              } w-full text-left px-4 py-2 flex items-center gap-2 text-red-600`}
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
