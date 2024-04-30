import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 ">
        <SideBar />
      </div>
      <div className="flex-[5] p-5 flex flex-col gap-5">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default layout;
