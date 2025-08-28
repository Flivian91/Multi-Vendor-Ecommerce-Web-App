import { Bell, Menu, Sun, User } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-12 px-4 py-2 fixed top-0 w-full z-50">
      {/* Icon */}
      <button>
        <Menu />
      </button>
      {/* Header Informations */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
