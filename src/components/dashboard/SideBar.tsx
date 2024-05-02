import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import NavLinks from "./NavLinks";

const SideBar = async () => {
  const session = await auth();
  return (
    <div className="sticky top-0 bg-bg-soft py-4 px-5 min-h-screen flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Image
          src={session?.user?.avatar}
          alt="avatar"
          width={150}
          height={150}
          className="w-8 h-8 object-fill rounded-full"
        />

        <div className="font-medium max-md:hidden">
          <p className="text-sm">{session?.user?.username}</p>
          <p className="text-[12px] text-text-soft">
            {session?.user?.role === "admin" ? "Adminstrator" : "Moderator"}
          </p>
        </div>
      </div>
      <NavLinks />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className=" hover:bg-secondary text-sm rounded-lg flex items-center gap-3 px-3 py-2 transition duration-500">
          <LogOut className="w-4" />
          <span className="max-md:hidden">Logout</span>
        </button>
      </form>
    </div>
  );
};

export default SideBar;
