import { ShoppingBasket } from "lucide-react";
import React from "react";

function SmallCardItem({ data }) {
  return (
    <div
      className={`rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 flex items-center gap-2 dark:text-slate-50 text-slate-800`}
    >
      {/* Icon space */}
      <div className={`rounded-full p-2 text-slate-100 ${data.color}`}>
        <data.icon />
      </div>
      <div className="flex flex-col gap-1 ">
        <h2 className="font-medium text-lg tracking-wide ">
          {data.title}
        </h2>
        <h4 className="text-xl font-semibold tracking-wider font-mono">
          {data.orderNum}
        </h4>
      </div>
    </div>
  );
}

export default SmallCardItem;
