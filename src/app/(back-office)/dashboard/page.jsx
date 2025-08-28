import DashboardCharts from "@/components/(back-office)/Charts/DashboardCharts";
import Heading from "@/components/common/Heading";
import LargeCards from "@/components/(back-office)/LargeCards";
import SmallCards from "@/components/(back-office)/SmallCards";
import CustomDataTable from "@/components/CustomDataTable";

function page() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <Heading title={"Dashboard Overview"} />
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Sales Chart */}
      <DashboardCharts />
      {/* Recent Order Table */}
      <CustomDataTable />
    </div>
  );
}

export default page;
