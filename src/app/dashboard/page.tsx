import AvailableCard from "@/components/dashboard/AvailableCard";
import Charts from "@/components/dashboard/Charts";
import CommingSoon from "@/components/dashboard/CommingSoon";
import TransActions from "@/components/dashboard/TransActions";
import { connectToDB } from "@/lib/utlis";
import { LucideCircleDollarSign, ShoppingCart, Users } from "lucide-react";

const DashboardPage = async () => {
  return (
    <div className="mt-5 grid grid-cols-12 gap-5 ">
      <div className="col-span-8 grid grid-cols-3 gap-4 ">
        <div className="flex h-fit  gap-3  bg-secondary px-3 py-3 rounded-lg">
          <Users className="w-4" />
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-sm font-bold">Total User</h2>
            <h3 className="font-bold text-lg">10,928</h3>
            <p className="text-xs">
              <span className="text-lime-500 mr-2">12%</span>More than previus
              week
            </p>
          </div>
        </div>
        <div className="flex gap-3 h-fit bg-bg-soft px-3 py-3 rounded-lg">
          <LucideCircleDollarSign className="w-4" />
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-sm font-bold">Total Renvue</h2>
            <h3 className="font-bold text-lg">$20.289</h3>
            <p className="text-xs">
              <span className="text-lime-500 mr-2">16%</span>More than previus
              week
            </p>
          </div>
        </div>
        <div className="flex gap-3 h-fit bg-bg-soft px-3 py-3 rounded-lg">
          <ShoppingCart className="w-4" />
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-sm font-bold">Total Products</h2>
            <h3 className="font-bold text-lg">413</h3>
            <p className="text-xs">
              <span className="text-lime-500 mr-2">2%</span>More than previus
              week
            </p>
          </div>
        </div>
        <div className=" col-span-3 bg-bg-soft px-3 py-3 rounded-lg">
          <h2 className="text-lg font-normal text-text-soft">
            Latest Transactions
          </h2>
          <TransActions />
        </div>
        <div className="col-span-3  bg-bg-soft px-3 py-3 rounded-lg">
          <Charts />
        </div>
      </div>
      <div className="col-span-4 flex flex-col gap-4 sticky top-6 h-fit">
        <AvailableCard />
        <CommingSoon />
      </div>
    </div>
  );
};

export default DashboardPage;
