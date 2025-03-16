import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Swap } from "./pages/Swap";
import { Liquidity } from "./pages/Liquidity";
import { Mint } from "./pages/Mint";
import { Portfolio } from "./pages/Portfolio";
import { Staking } from "./pages/Staking";
import { Disclaimer } from "./pages/Disclaimer";
import { BrickWallIcon } from "lucide-react";
import { Bridge } from "./pages/Bridge";
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/bridge" element={<Bridge />} />
        </Routes>
      </Layout>
    </Router>
    <Analytics/>
    </>
  );
}

export default App;
