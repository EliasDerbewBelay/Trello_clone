import SignupForm from "@/components/auth/Signupform";

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-700 mb-5">Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default Signup;
