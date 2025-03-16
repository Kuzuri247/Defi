import { useState } from "react";
import {
  Repeat,
  Droplets,
  Coins,
  PieChart,
} from "lucide-react";
import { NavLinks } from "./NavLinks";
import { GridItem, SimpleGrid,Flex } from "@chakra-ui/react"
import { DecorativeBo } from "compositions/lib/decorative-box";

// export function MobileMenu() {
//   return (
//     <div className="lg:hidden">
//       <nav>
//         <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="hidden lg:ml-10 lg:block">
//                 <NavLinks className="flex space-x-4" />
//               </div>
//             </div>
      
//           </div>
//       </nav>
//     </div>
//   );
// }



export const MobileMenu = () => {
  return (
    <Flex gap="4">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  );
};