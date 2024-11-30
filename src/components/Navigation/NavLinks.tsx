import React from 'react';
import { Link } from 'react-router-dom';
import { Repeat, Droplets, Coins, PieChart, MoreHorizontal } from 'lucide-react';
import { MoreMenu } from './MoreMenu';

export const navigationItems = [
  { name: 'Swap', icon: Repeat, path: '/swap' },
  { name: 'Liquidity', icon: Droplets, path: '/liquidity' },
  { name: 'Mint', icon: Coins, path: '/mint' },
  { name: 'Portfolio', icon: PieChart, path: '/portfolio' },
];

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
}

export function NavLinks({ className = '', isMobile = false }: NavLinksProps) {
  return (
    <nav className={className}>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
        >
          <item.icon className="h-5 w-5" />
          <span>{item.name}</span>
        </Link>
      ))}
      {!isMobile && <MoreMenu />}
    </nav>
  );
}