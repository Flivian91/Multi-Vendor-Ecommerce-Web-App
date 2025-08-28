import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"#"} className="py-3.5">
      <Image
        src={"/Hekto.png"}
        alt="Eccommerc logo"
        width={100}
        height={100}
        className=" ml-4"
      />
    </Link>
  );
}

export default Logo;
