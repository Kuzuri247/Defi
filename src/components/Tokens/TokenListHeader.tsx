import React from "react";

export function TokenListHeader() {
  return (
    <thead>
      <tr className="border-b border-gray-700 text-left text-sm text-gray-400">
        <th className="pb-3">Token</th>
        <th className="pb-3">Price</th>
        <th className="pb-3">24h Change</th>
        <th className="pb-3">Market Cap</th>
        <th className="pb-3">Volume (24h)</th>
      </tr>
    </thead>
  );
}
