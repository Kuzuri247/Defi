import React from "react";
import { Wallet } from "lucide-react";

export function WalletButton() {
  return (
    <div className="relative">
      <button className="flex items-center space-x-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500">
        <Wallet className="h-5 w-5" />
        <span>Connect Wallet</span>
      </button>
      </div>
  );
}
