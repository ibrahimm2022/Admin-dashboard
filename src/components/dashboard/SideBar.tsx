"use client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "../../lib/constains";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 bg-bg-soft py-4 px-5 min-h-screen flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Image
          src={"/noavatar.png"}
          alt="noavatar"
          width={150}
          height={150}
          className="w-8 h-8 object-fill rounded-full"
        />

        <div className="font-medium">
          <p className="text-sm">Ibrahim Bakry</p>
          <p className="text-[12px] text-text-soft">Adminstrator</p>
        </div>
      </div>
      {items?.map((item: any, index) => (
        <ul key={index} className="flex flex-col gap-2">
          <li className="font-bold text-[13px] ">{item.title}</li>
          {item.list.map((link: any, i: number) => (
            <li key={i}>
              <Link
                href={link.path}
                className={` ${
                  pathname === link.path && "bg-secondary "
                } hover:bg-secondary text-sm rounded-lg flex items-center gap-3 px-3 py-2 transition duration-500`}
              >
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
      <button className=" hover:bg-secondary text-sm rounded-lg flex items-center gap-3 px-3 py-2 transition duration-500">
        <LogOut className="w-4" />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
