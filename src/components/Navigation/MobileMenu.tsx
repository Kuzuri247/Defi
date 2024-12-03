import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 bg-gray-800 p-4 shadow-lg">
          <NavLinks className="space-y-2" />
        </div>
      )}
    </div>
  );
}
