"use client";
import {
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Store,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SidebarLinks() {
  const pathname = usePathname();
  const newLink = pathname.split("/")[2]
  console.log(newLink);
  

  // Sidebar Links Object
  const links = [
    {
      id: 1,
      name: "Customers",
      route: "customers",
      icon: User2,
    },
    {
      id: 2,
      name: "Orders",
      route: "orders",
      icon: ShoppingBag,
    },
    {
      id: 3,
      name: "Our Staff",
      route: "staff",
      icon: User,
    },
    {
      id: 4,
      name: "Markets",
      route: "markets",
      icon: Store,
    },
    {
      id: 5,
      name: "Settings",
      route: "settings",
      icon: Settings,
    },
  ];
  return (
    <div className="space-y-3 flex flex-col">
      <Link
        href={"/dashboard"}
        className={`flex items-center space-x-3 py-2 px-4 ${
          pathname.slice(1) === "dashboard"
            ? " border-l-4  border-green-600 text-green-600 "
            : " "
        } `}
      >
        <LayoutDashboard />
        <span>Dashboard</span>
      </Link>
      {links.map((link) => {
        return (
          <Link
            href={`/dashboard/${link.route}`}
            className={`flex items-center space-x-3 py-2 px-4 ${
              newLink === link.route
                ? " border-l-4  border-green-600 text-green-600 "
                : " "
            } `}
          >
            <link.icon />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarLinks;
