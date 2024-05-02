import UpdateUserForm from "@/components/dashboard/UpdateUserForm";
import { getUser } from "@/lib/data";

const UserDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getUser(params.id);
  const user = await JSON.parse(data);
  return (
    <div>
      <UpdateUserForm user={user} />
    </div>
  );
};

export default UserDetails;
