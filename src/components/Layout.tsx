import React from "react";
import { Navbar } from "./Navbar";
import { Analytics } from "@vercel/analytics/react"

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="">
     <Analytics />
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
}
