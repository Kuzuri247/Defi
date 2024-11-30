import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export function Mint() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-8 text-3xl font-bold">Mint New Token</h1>
      
      <div className="rounded-lg bg-gray-800 p-6">
        <div className="mb-6 flex items-center justify-center">
          <div className="rounded-full bg-indigo-600/20 p-4">
            <Coins className="h-8 w-8 text-indigo-400" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-400">Token Name</label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="e.g., My Token"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">Token Symbol</label>
            <input
              type="text"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              placeholder="e.g., MTK"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">Total Supply</label>
            <input
              type="number"
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
              placeholder="e.g., 1000000"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500">
            Create Token
          </button>
        </div>
      </div>
    </div>
  );
}