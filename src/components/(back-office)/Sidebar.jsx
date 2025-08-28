import React from "react";
import { Separator } from "../ui/separator";
import Logo from "../common/Logo";
import SidebarLinks from "../common/SidebarLinks";

function Sidebar() {
  return (
    <div className="dark:bg-slate-800 bg-slate-100 hidden md:flex flex-col gap-2 overflow-auto w-0 md:w-56 shadow-md h-screen dark:text-slate-100 text-slate-800  fixed left-0 top-0 z-20">
      {/* Logo */}
      <Logo />
      <Separator />
      {/* Links */}
      <SidebarLinks />
    </div>
  );
}

export default Sidebar;
