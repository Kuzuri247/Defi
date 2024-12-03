import React from "react";
import { DollarSign, Users, ArrowUpRight, Wallet } from "lucide-react";
import { StatsCard } from "./StatsCard";

const stats = [
  {
    name: "Total Value Locked",
    value: "$1.2B",
    change: "+12.3%",
    icon: DollarSign,
  },
  {
    name: "Active Users",
    value: "24.5K",
    change: "+5.4%",
    icon: Users,
  },
  {
    name: "Trading Volume",
    value: "$425M",
    change: "+8.1%",
    icon: ArrowUpRight,
  },
  {
    name: "Total Wallets",
    value: "156K",
    change: "+3.2%",
    icon: Wallet,
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.name} {...stat} />
      ))}
    </div>
  );
}
