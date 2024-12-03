import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="">
    
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
}
