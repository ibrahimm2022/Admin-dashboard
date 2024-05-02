"use client";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form
      action={formAction}
      className="w-fit h-fit text-center py-10 px-7 bg-bg-soft flex flex-col gap-4  rounded-lg "
    >
      <h1 className="text-3xl mb-3 ">Login</h1>
      <input
        type="email"
        required
        placeholder="email"
        name="email"
        className="bg-primary py-3 px-4 focus-visible:outline-none rounded-lg"
      />
      <input
        type="password"
        required
        placeholder="Password"
        name="password"
        className="bg-primary py-3 px-4 focus-visible:outline-none rounded-lg"
      />
      {state && (
        <p className="text-xs text-red-1 text-center capitalize ">{state}</p>
      )}
      <button type="submit" className=" py-2 px-3 bg-burbile rounded-lg">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
