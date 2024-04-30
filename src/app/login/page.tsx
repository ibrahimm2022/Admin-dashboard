const LoginPage = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <form
        action=""
        className="w-fit h-fit text-center py-10 px-7 bg-bg-soft flex flex-col gap-4  rounded-lg "
      >
        <h1 className="text-3xl mb-3 ">Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username" 
          className="bg-primary py-3 px-4 focus-visible:outline-none rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-primary py-3 px-4 focus-visible:outline-none rounded-lg"
        />
        <button type="submit" className=" py-2 px-3 bg-burbile rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
