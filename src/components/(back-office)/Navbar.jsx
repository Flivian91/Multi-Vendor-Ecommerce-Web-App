import {
  Bell,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "../ui/badge";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800  h-16 px-4 py-2 text-green-500 fixed top-0 w-full z-10 pl-60">
      {/* Icon */}
      <button>
        <Menu />
      </button>
      {/* Header Informations */}
      <div className="flex items-center gap-3 pr-6">
        <button>
          <Sun />
        </button>

        <DropdownMenu className="">
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center bg-transparent rounded-lg  focus:outline-none "
            >
              <Bell />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500  rounded-full top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 mr-6">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={"/#"}
                  className="flex-1 flex items-center justify-between gap-2"
                >
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={"/image.png"}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className={"text-xs"}>
                        Stock Out
                      </Badge>
                      <span className="text-xs">Dec 12 2023 - 12:30PM</span>
                    </div>
                  </div>
                </Link>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={"/#"}
                  className="flex-1 flex items-center justify-between gap-2"
                >
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={"/image.png"}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className={"text-xs"}>
                        Stock Out
                      </Badge>
                      <span className="text-xs">Dec 12 2023 12:30PM</span>
                    </div>
                  </div>
                </Link>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={"/#"}
                  className="flex-1 flex items-center justify-between gap-2"
                >
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={"/image.png"}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className={"text-xs"}>
                        Stock Out
                      </Badge>
                      <span className="text-xs">Dec 12 2023 12:30PM</span>
                    </div>
                  </div>
                </Link>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <button>
          <Bell />
        </button> */}
        {/* <button>
              <Image
                width={200}
                height={200}
                src={"/image.png"}
                className="w-8 h-8 rounded-full"
              />
            </button> */}

        <DropdownMenu className="">
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="/image.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-2 mr-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
