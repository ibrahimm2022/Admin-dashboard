"use client";
import { Bell, Earth, MessageSquareMore, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between px-3 py-2 bg-bg-soft items-center text-sm rounded-lg">
      <h2 className="text-lg capitalize text-text-soft">
        {pathname.split("/").pop()}
      </h2>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center bg-secondary rounded-lg px-3">
          <Search className="w-4" />
          <input
            type="text"
            placeholder="Search.."
            className="bg-[transparent] py-2 px-3 border-none focus-visible:outline-none"
          />
        </div>
        <MessageSquareMore className="w-5" />
        <Bell className="w-5" />
        <Earth className="w-5" />
      </div>
    </div>
  );
};

export default NavBar;
