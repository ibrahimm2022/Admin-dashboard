import { addUser } from "@/lib/actions";

const AddUserPage = () => {
  return (
    <form
      action={addUser}
      className="bg-bg-soft py-4 rounded-lg px-3 flex flex-wrap justify-between"
    >
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="conpassword"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="phone"
        placeholder="phone"
        name="phone"
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <select
        name="role"
        id="role"
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      >
        <option
          value="general"
          className="bg-primary py-2 px-3 border-[#23374a]"
        >
          Role
        </option>
        <option value="admin" className="bg-primary py-2 px-3 border-[#23374a]">
          Admin
        </option>
        <option value="user" className="bg-primary py-2 px-3 border-[#23374a]">
          User
        </option>
      </select>
      <textarea
        name="address"
        id="address"
        rows={8}
        placeholder="address"
        className="w-full mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      ></textarea>
      <button
        type="submit"
        className="w-full py-2 text-center border-[#23374a] bg-teal-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddUserPage;
