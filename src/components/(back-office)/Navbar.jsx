import { Bell, Menu, Sun, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800  h-16 px-4 py-2 text-green-500 fixed top-0 w-full z-10 pl-60">
      {/* Icon */}
      <button>
        <Menu />
      </button>
      {/* Header Informations */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>

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

        {/* <button>
          <Bell />
        </button> */}
        <button>
          <Image
            width={200}
            height={200}
            src={"/image.png"}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
