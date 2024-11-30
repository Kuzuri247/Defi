import React from 'react';
import { DollarSign, Users, ArrowUpRight, Wallet } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      name: 'Total Value Locked',
      value: '$1.2B',
      change: '+12.3%',
      icon: DollarSign,
    },
    {
      name: 'Active Users',
      value: '24.5K',
      change: '+5.4%',
      icon: Users,
    },
    {
      name: 'Trading Volume',
      value: '$425M',
      change: '+8.1%',
      icon: ArrowUpRight,
    },
    {
      name: 'Total Wallets',
      value: '156K',
      change: '+3.2%',
      icon: Wallet,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="rounded-lg bg-gray-800 p-6">
          <div className="flex items-center">
            <div className="rounded-md bg-indigo-600 p-2">
              <stat.icon className="h-5 w-5 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-400">{stat.name}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <span className="ml-2 text-sm text-green-400">{stat.change}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}