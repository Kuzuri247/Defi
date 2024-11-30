import React from 'react';
import type { Token } from '../../types';

const tokens: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 188.45,
    change24h: 5.67,
    marketCap: 82456789012,
    volume24h: 3456789012,
  },
  {
    symbol: 'RAY',
    name: 'Raydium',
    price: 2.34,
    change24h: -2.15,
    marketCap: 234567890,
    volume24h: 12345678,
  },
];

export function TokenList() {
  return (
    <div className="rounded-lg bg-gray-800 p-6">
      <h2 className="mb-4 text-xl font-semibold">Popular Tokens</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700 text-left text-sm text-gray-400">
              <th className="pb-3">Token</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">24h Change</th>
              <th className="pb-3">Market Cap</th>
              <th className="pb-3">Volume (24h)</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.symbol} className="border-b border-gray-700">
                <td className="py-4">
                  <div className="flex items-center">
                    <span className="font-medium">{token.symbol}</span>
                    <span className="ml-2 text-sm text-gray-400">{token.name}</span>
                  </div>
                </td>
                <td className="py-4">${token.price.toLocaleString()}</td>
                <td className={`py-4 ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {token.change24h > 0 ? '+' : ''}{token.change24h}%
                </td>
                <td className="py-4">${(token.marketCap / 1e9).toFixed(2)}B</td>
                <td className="py-4">${(token.volume24h / 1e6).toFixed(2)}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}