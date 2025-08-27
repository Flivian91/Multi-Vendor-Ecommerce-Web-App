import React from "react";
import WeeklySalesCharts from "./WeeklySalesCharts";
import BestSellingProductsCharts from "./BestSellingProductsCharts";

function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Sales charts */}
      <WeeklySalesCharts />
      {/* Product Chart */}
      <BestSellingProductsCharts />
    </div>
  );
}

export default DashboardCharts;
