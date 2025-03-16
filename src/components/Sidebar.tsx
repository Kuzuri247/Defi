// import React from "react";
// import {
//   LayoutDashboard,
//   Repeat,
//   Droplets,
//   Coins,
//   PieChart,
// } from "lucide-react";

// export function Sidebar() {
//   const navigation = [
//     { name: "Dashboard", icon: LayoutDashboard },
//     { name: "Swap", icon: Repeat },
//     { name: "Liquidity", icon: Droplets },
//     { name: "Staking", icon: Coins },
//     { name: "Portfolio", icon: PieChart },
//   ];

//   return (
//     <div className="w-64 bg-gray-800 p-4">
//       <nav className="space-y-2">
//         {navigation.map((item) => (
//           <button
//             key={item.name}
//             className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             <item.icon className="h-5 w-5" />
//             <span>{item.name}</span>
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// }
