"use client";
import { items } from "@/lib/constains";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div>
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
                <span className="max-md:hidden">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default NavLinks;
