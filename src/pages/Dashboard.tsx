// import React from 'react';
import { Stats } from "../components/Dashboard/Stats";
import { TokenList } from "../components/Dashboard/TokenList";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Stats />
      <TokenList />
    </div>
  );
}
