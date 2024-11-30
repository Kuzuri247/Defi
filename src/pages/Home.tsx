import React from 'react';
import { Stats } from '../components/Stats/Stats';
import { TokenList } from '../components/Tokens/TokenList';

export function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Welcome to Stable Fun</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Your gateway to decentralized finance on Solana. Swap, provide liquidity, and stake tokens with confidence.
        </p>
      </section>
      <Stats />
      <TokenList />
    </div>
  );
}