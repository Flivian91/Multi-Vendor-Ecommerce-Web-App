"use client";
import { Button } from "@/components/ui/button";
import {
  BookImage,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Minus,
  Settings,
  ShoppingBag,
  Slack,
  Store,
  User,
  User2,
  UserSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

function SidebarLinks() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const newLink = pathname.split("/")[2];

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
      name: "Farmers",
      route: "farmers",
      icon: UserSquare,
    },
    {
      id: 6,
      name: "Settings",
      route: "settings",
      icon: Settings,
    },

    {
      id: 7,
      name: "Online Store",
      route: "store",
      icon: Settings,
    },
  ];
  const catalogueLink = [
    {
      id: 1,
      name: "Products",
      route: "products",
    },
    {
      id: 2,
      name: "Categories",
      route: "categories",
    },
    {
      id: 3,
      name: "Attributes",
      route: "attributes",
    },
    {
      id: 4,
      name: "Coupen",
      route: "coupen",
    },
    {
      id: 5,
      name: "Sliders",
      route: "sliders",
    },
  ];
  return (
    <div className="space-y-3 flex flex-col">
      <Link
        href={"/dashboard"}
        className={`flex items-center font-semibold space-x-3 py-2 px-4 ${
          pathname.slice(1) === "dashboard"
            ? " border-l-4  border-green-600 text-green-600 "
            : " "
        } `}
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </Link>
      <Collapsible>
        <CollapsibleTrigger onClick={() => setOpenMenu((prev) => !prev)}>
          <button
            className={
              "flex items-center font-semibold justify-between space-x-3 py-2 px-4  "
            }
          >
            <div className="flex items-center font-semibold space-x-3">
              <BookImage size={18} />
              <span>Catalogue</span>
            </div>
            {openMenu ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-3 dark:bg-slate-800 bg-white mx-5 rounded-md py-2">
          {catalogueLink.map((link) => {
            return (
              <Link
                href={`/dashboard/${link.route}`}
                key={link.id}
                className={`flex items-center font-semibold space-x-3 py-1 px-4 ${
                  newLink === link.route
                    ? "text-green-600 "
                    : " dark:text-slate-100 text-slate-800"
                } `}
              >
                <Minus size={12} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </CollapsibleContent>
      </Collapsible>

      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={`/dashboard/${link.route}`}
            className={`flex items-center font-semibold space-x-3 py-2 px-4 ${
              newLink === link.route
                ? " border-l-4  border-green-600 text-green-600 "
                : " "
            } `}
          >
            <link.icon size={18} />
            <span>{link.name}</span>
          </Link>
        );
      })}
      <Separator />
      <div className="flex w-full items-center justify-center pb-4">
        <Button className="bg-green-600 hover:bg-green-500">
          <LogOut />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
}

export default SidebarLinks;
