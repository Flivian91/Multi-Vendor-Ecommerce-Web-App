import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="bg-slate-700 space-y-6 w-56 min-h-screen text-slate-50 p-3 fixed left-0 top-0 z-20">
      {/* Logo */}
      <Link href={"#"} className="mb-3">Logo</Link>
      {/* Links */}
      <div className="space-y-3 flex flex-col">
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Catalog</Link>
        <Link href={"#"}>Customers</Link>
        <Link href={"#"}>Market</Link>
        <Link href={"#"}>Orders</Link>
        <Link href={"#"}>Farmers</Link>
        <Link href={"#"}>Staff</Link>
        <Link href={"#"}>Settings</Link>

        <Link href={"#"}>Online Store</Link>
      </div>
    </div>
  );
}

export default Sidebar;
