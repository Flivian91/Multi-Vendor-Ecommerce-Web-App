import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { LayoutDashboard, X } from "lucide-react";
import Logo from "../common/Logo";
import SidebarLinks from "../common/SidebarLinks";
import { Button } from "../ui/button";

function MobileSidebar({ onClick }) {
  return (
    <div className="dark:bg-slate-700 md:hidden  bg-slate-100 flex flex-col gap-2 overflow-auto w-64 shadow-md h-screen dark:text-slate-50 text-slate-800  fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <Logo />
        <Button onClick={() => onClick()} variant="outline">
          <X />
        </Button>
      </div>

      <Separator />
      {/* Links */}
      <SidebarLinks />
    </div>
  );
}

export default MobileSidebar;
