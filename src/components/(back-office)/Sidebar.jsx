import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { LayoutDashboard } from "lucide-react";
import Logo from "./common/Logo";
import SidebarLinks from "./common/SidebarLinks";

function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-slate-100 flex flex-col gap-2 w-56 shadow-md min-h-screen dark:text-slate-50 text-slate-800  fixed left-0 top-0 z-20">
      {/* Logo */}
      <Logo />
      <Separator />
      {/* Links */}
      <SidebarLinks />
    </div>
  );
}

export default Sidebar;
