import { Layers } from "lucide-react";
import React from "react";

function LargeCardItem({ data }) {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-4 flex items-center justify-center flex-col gap-2 ${data.color} `}
    >
      <Layers />
      <h4>
        {data.period}
      </h4>
      <h2 className="lg:text-2xl text-xl">
        Ksh {data.sales}
      </h2>
    </div>
  );
}

export default LargeCardItem;
