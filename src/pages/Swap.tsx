import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

export function Swap() {
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-8 text-3xl font-bold">Swap Tokens</h1>
      <div className="rounded-lg bg-gray-800 p-6">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-400">From</label>
            <div className="flex gap-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="rounded-lg bg-gray-700 px-4 py-3"
              >
                <option value="SOL">SOL</option>
                <option value="USDC">USDC</option>
                <option value="RAY">RAY</option>
              </select>
            </div>
          </div>
          
          <button className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 p-2 hover:bg-gray-600">
            <ArrowDownUp className="h-5 w-5" />
          </button>

          <div>
            <label className="mb-2 block text-sm text-gray-400">To</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="0.0"
                disabled
                className="w-full rounded-lg bg-gray-700 p-3 text-white"
              />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="rounded-lg bg-gray-700 px-4 py-3"
              >
                <option value="USDC">USDC</option>
                <option value="SOL">SOL</option>
                <option value="RAY">RAY</option>
              </select>
            </div>
          </div>

          <button className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500">
            Swap Tokens
          </button>
        </div>
      </div>
    </div>
  );
}