"use client";
import Navbar from "@/components/(back-office)/Navbar";
import Sidebar from "@/components/(back-office)/Sidebar";
import MobileSidebar from "@/components/(back-office)/MobileSidebar";
import React, { useState } from "react";
import Overlay from "@/components/common/Overlay";

function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}

      <Sidebar />
      {showSidebar && <MobileSidebar onClick={setShowSidebar} />}
      {showSidebar && <Overlay onClick={setShowSidebar} />}

      {/* Main body */}
      <div className="w-full lg:ml-56 ml-0 flex-grow min-h-screen">
        {/* Header */}
        <Navbar setShowSidebar={setShowSidebar} />
        {/* Main */}
        <main className="p-4 bg-slate-200 dark:bg-slate-900 text-slate-50  mt-12 ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default layout;
