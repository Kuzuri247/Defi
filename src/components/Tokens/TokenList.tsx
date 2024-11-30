import React from 'react';
import { TokenRow } from './TokenRow';
import { TokenListHeader } from './TokenListHeader';
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
          <TokenListHeader />
          <tbody>
            {tokens.map((token) => (
              <TokenRow key={token.symbol} token={token} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}