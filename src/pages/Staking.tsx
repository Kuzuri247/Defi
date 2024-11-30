import React from 'react';
import { Lock } from 'lucide-react';

const stakingPools = [
  {
    token: 'SOL',
    apr: '8.5%',
    duration: '30 days',
    minStake: '10 SOL',
    totalStaked: '125.5K SOL',
  },
  {
    token: 'RAY',
    apr: '15.2%',
    duration: '90 days',
    minStake: '100 RAY',
    totalStaked: '2.1M RAY',
  },
];

export function Staking() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Staking</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {stakingPools.map((pool) => (
          <div key={pool.token} className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-indigo-400" />
                <h3 className="text-xl font-semibold">{pool.token} Staking</h3>
              </div>
              <span className="rounded-full bg-indigo-600/20 px-3 py-1 text-sm text-indigo-400">
                {pool.duration}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">APR</span>
                <span className="font-medium text-green-400">{pool.apr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Minimum Stake</span>
                <span>{pool.minStake}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Staked</span>
                <span>{pool.totalStaked}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg bg-indigo-600 py-2 font-medium text-white hover:bg-indigo-500">
              Stake {pool.token}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}