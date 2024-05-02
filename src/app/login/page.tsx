import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div>
        <div className="bg-secondary rounded-lg p-4 mb-3 text-center">
          <p>Try Admin Account</p>
          <p>Email: admin@admin.com</p>
          <p>Password: 123456789</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
