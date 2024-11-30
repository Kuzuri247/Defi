import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  name: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export function StatsCard({ name, value, change, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-lg bg-gray-800 p-6 transition-transform hover:scale-[1.02]">
      <div className="flex items-center">
        <div className="rounded-md bg-indigo-600 p-2">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-400">{name}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-white">{value}</p>
            <span className="ml-2 text-sm text-green-400">{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
}