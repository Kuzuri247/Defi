import React from "react";
import { Settings } from "lucide-react";

export function SettingsButton() {
  return (
    <button className="flex items-center justify-center rounded-lg bg-gray-700 p-2 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">
      <Settings className="h-5 w-5" />  
    </button>
  );
}
