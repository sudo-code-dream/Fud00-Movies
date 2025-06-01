"use client";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`bg-slate-900 min-h-screen w-full`}>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Layout;
