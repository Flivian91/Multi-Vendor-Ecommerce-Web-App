import Navbar from "@/components/(back-office)/Navbar";
import Sidebar from "@/components/(back-office)/Sidebar";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}

      <Sidebar />

      {/* Main body */}
      <div className="w-full">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="p-4 bg-slate-900 text-slate-50 min-h-screen mt-12 ml-56">{children}</main>
      </div>
    </div>
  );
}

export default layout;
