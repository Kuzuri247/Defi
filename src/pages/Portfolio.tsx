import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const assets = [
  { token: 'SOL', balance: '45.8', value: '$8,612.45', change: '+5.2%' },
  { token: 'USDC', balance: '1,250.00', value: '$1,250.00', change: '0%' },
];

const recentActivity = [
  { type: 'Swap', description: 'SOL → USDC', amount: '2.5 SOL', time: '2h ago' },
  { type: 'Stake', description: 'Staked SOL', amount: '10 SOL', time: '1d ago' },
];

export function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="rounded-lg bg-gray-800 px-6 py-3">
          <div className="text-sm text-gray-400">Total Value</div>
          <div className="text-2xl font-bold">$9,862.45</div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">Your Assets</h2>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.token} className="flex items-center justify-between rounded-lg bg-gray-700 p-4">
              <div className="flex items-center space-x-4">
                <Wallet className="h-8 w-8 text-indigo-400" />
                <div>
                  <div className="font-medium">{asset.token}</div>
                  <div className="text-sm text-gray-400">{asset.balance} {asset.token}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{asset.value}</div>
                <div className={`text-sm ${asset.change.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                  {asset.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg bg-gray-700 p-4">
              <div className="flex items-center space-x-4">
                {activity.type === 'Swap' ? (
                  <ArrowUpRight className="h-8 w-8 text-green-400" />
                ) : (
                  <ArrowDownRight className="h-8 w-8 text-blue-400" />
                )}
                <div>
                  <div className="font-medium">{activity.type}</div>
                  <div className="text-sm text-gray-400">{activity.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{activity.amount}</div>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="mr-1 h-4 w-4" />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}