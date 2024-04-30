import Pagination from "@/components/dashboard/Pagination";
import Search from "@/components/dashboard/Search";
import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fetchUsers = async (q: string, page: string) => {
  try {
    const { users, count } = await getUsers(q, parseInt(page));
    return { users, count };
  } catch (error) {
    console.log(error);
    return { users: null, count: null };
  }
};

const UsersPage = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const { users, count } = await getUsers(
    searchParams?.q,
    parseInt(searchParams.page)
  );
  // const { users, count } = await fetchUsers(searchParams?.q, searchParams.page);
  return (
    <div className="bg-bg-soft py-2 px-3 rounded-lg">
      <div className=" flex justify-between items-center bg-soft py-2 px-3 rounded-lg   ">
        <Search />
        <Link
          href={"/dashboard/users/add"}
          className="bg-burbile rounded-lg py-1 px-3 flex gap-1 w-fit items-center text-sm"
        >
          <Plus className="w-4" />
          New
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead className="text-sm">
          <tr>
            <th className="text-start py-2">Name</th>
            <th className="text-start py-2">E-Mail</th>
            <th className="text-start py-2">Created At</th>
            <th className="text-start py-2">Role</th>
            <th className="text-start py-2">Status</th>
            <th className="text-start py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {users ? (
            users?.map((user: UserType) => (
              <tr key={user._id}>
                <td className="py-2">
                  <div className="flex gap-2 items-center ">
                    <Image
                      src={user.avatar}
                      alt="noavatar"
                      width={150}
                      height={150}
                      className="w-6 h-6 object-fill rounded-full"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">
                  {user.createdAt.toString().slice(4, 15)}
                </td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">{user.isActive ? "Active" : "Passive"}</td>
                <td className=" py-2">
                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/users/${user._id}`}
                      className="py-1 px-2 rounded-lg bg-[#afd6ee75]"
                    >
                      View
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user._id} />
                      <button className="py-1 px-2 rounded-lg bg-red-700">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-red-1 text-lg font-bold text-center"
              >
                Falid to fetch
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination items={count} />
    </div>
  );
};

export default UsersPage;
