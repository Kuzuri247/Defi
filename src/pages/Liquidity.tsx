import React from "react";
import { Plus } from "lucide-react";

const pools = [
  { pair: "SOL/USDC", tvl: "$45.2M", apr: "12.5%", volume: "$2.1M" },
  { pair: "RAY/USDC", tvl: "$12.8M", apr: "18.2%", volume: "$890K" },
];

export function Liquidity() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Liquidity Pools</h1>
        <button className="flex items-center space-x-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500">
          <Plus className="h-5 w-5" />
          <span>Add Liquidity</span>
        </button>
      </div>

      <div className="rounded-lg bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 text-left text-sm text-gray-400">
                <th className="p-4">Pool</th>
                <th className="p-4">TVL</th>
                <th className="p-4">APR</th>
                <th className="p-4">24h Volume</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((pool) => (
                <tr key={pool.pair} className="border-b border-gray-700">
                  <td className="p-4 font-medium">{pool.pair}</td>
                  <td className="p-4">{pool.tvl}</td>
                  <td className="p-4 text-green-400">{pool.apr}</td>
                  <td className="p-4">{pool.volume}</td>
                  <td className="p-4">
                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
