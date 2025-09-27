import { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/auth/login", undefined, { shallow: false });
  };

  const goToSignUp = () => {
    router.push("/auth/signup", undefined, { shallow: false });
  };
  return (
    <header className="flex justify-between items-center shadow-lg px-6 py-4">
      <Link href="/">
        <h1 className="font-bold text-4xl text-slate-600">EliFlow</h1>
      </Link>

      <div className="flex items-center gap-6 font-extralight text-xl">
        <button
          className="bg-blue-500 text-white px-6 py-1 rounded-lg cursor-pointer font-semibold hover:shadow-lg"
          onClick={goToLogin}
        >
          Log In
        </button>
        <button
          className="bg-red-500 text-white px-6 py-1 rounded-lg cursor-pointer font-semibold hover:shadow-lg"
          onClick={goToSignUp}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
