import React from 'react';
import type { Token } from '../../types';

interface TokenRowProps {
  token: Token;
}

export function TokenRow({ token }: TokenRowProps) {
  return (
    <tr className="border-b border-gray-700">
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
  );
}