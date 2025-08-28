import Navbar from "@/components/(back-office)/Navbar";
import Sidebar from "@/components/(back-office)/Sidebar";
import Provider from "@/context/Provider";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}

      <Sidebar />

      {/* Main body */}
      <div className="w-full lg:ml-56 ml-0 flex-grow min-h-screen">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="p-4 bg-slate-200 dark:bg-slate-900 text-slate-50  mt-12 ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default layout;
