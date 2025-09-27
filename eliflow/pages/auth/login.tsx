import LoginForm from "@/components/auth/Loginform";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-700 mb-5">Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
