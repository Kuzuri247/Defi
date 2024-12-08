import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MoreHorizontal,
  HelpCircle,
  Book,
  Users,
  Settings,
} from "lucide-react";

const moreItems = [
  { name: "Bridge",icon:  Settings, path: "./bridge" },
  { name: "Staking", icon: MoreHorizontal, path: "./staking" },
  { name: "Disclaimer", icon: HelpCircle, path: "./disclaimer" },
  { name: "Documentation", icon: Book, path: "./docs" },
  { name: "Community", icon: Users, path: "./community" },
];

export function MoreMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
      >
        <MoreHorizontal className="h-5 w-5" />
        <span>More</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 py-2 shadow-xl">
          {moreItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
