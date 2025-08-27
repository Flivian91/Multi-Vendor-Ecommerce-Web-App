import { Check, CheckCheck, History, ShoppingBasket, Truck } from "lucide-react";
import React from "react";
import SmallCardItem from "./Cards/SmallCardItem";

function SmallCards() {
  const orderStatsNumber = [
    {
      title: "Total Order",
      icon: ShoppingBasket,
      orderNum: 554,
      color: "bg-orange-600",
    },
    {
      title: "Order Pending",
      icon: History,
      orderNum: 130,
      color: "bg-blue-600",
    },
    {
      title: "Order Processing",
      icon: Truck,
      orderNum: 45,
      color: "bg-purple-600",
    },
    {
      title: "Order Completed",
      icon: CheckCheck,
      orderNum: 820,
      color: "bg-green-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-4">
      {orderStatsNumber.map((stat, i) => {
        return <SmallCardItem key={i} data={stat} />;
      })}
    </div>
  );
}

export default SmallCards;
