import React from "react";
import LargeCardItem from "./Cards/LargeCardItem";

function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 137000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 12700000,
      color: "bg-orange-600",
    },
    {
      period: "All time Slaes",
      sales: 874110000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-4">
      {/* Card Item */}
      {orderStats.map((stat, i) => {
        return <LargeCardItem key={i} data={stat} />;
      })}
    </div>
  );
}

export default LargeCards;
