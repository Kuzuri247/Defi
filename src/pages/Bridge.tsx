import React from "react";

export function Bridge() {
  return (
    <div className="space-y-8">            
      <div className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">Bridge</h2>        
        <p className="text-gray-400">           

        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 rounded-full bg-indigo-600/20 p-1" />
                <h3 className="text-xl font-semibold">Solana</h3>
              </div>
              <span className="rounded-full bg-indigo-600/20 px-3 py-1 text-sm text-indigo-400">
                Solana
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Minimum Deposit</span>
                <span>10 SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Maximum Deposit</span>
                <span>100 SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Minimum Withdraw</span>
                <span>10 SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Maximum Withdraw</span>
                <span>100 SOL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}