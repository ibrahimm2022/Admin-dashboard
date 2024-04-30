import { updateUser } from "@/lib/actions";
import { getUser } from "@/lib/data";
import Image from "next/image";

const UserDetails = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id);
  return (
    <div className="flex gap-5">
      <div className="p-3 bg-bg-soft w-[250px] rounded-lg h-fit">
        <Image
          src={user.avatar}
          alt="avater"
          width={200}
          height={400}
          className="w-full h-[250px] object-cover rounded-lg mb-3"
        />
        <p>Hello</p>
      </div>
      <form
        action={updateUser}
        className="flex flex-col gap-2 flex-[8] bg-bg-soft p-3  rounded-lg"
      >
        <input type="hidden" name="id" value={user._id} />
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder={user.username}
            name="username"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder={user.email}
            name="email"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            placeholder={user.phone}
            name="phone"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="adress" className="text-sm">
            adress
          </label>
          <textarea
            id="adress"
            placeholder={user.address}
            name="adress"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <select
            name="role"
            id="role"
            defaultValue={user.role}
            className="  py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          >
            <option
              value="general"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              Role
            </option>
            <option
              value="admin"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              Admin
            </option>
            <option
              value="user"
              selected={user.role === "user"}
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              User
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-center border-[#23374a] bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
