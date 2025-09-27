const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center shadow-lg px-6 py-4">
      <h1 className="font-bold text-4xl text-slate-600">EliFlow</h1>

      <div className="flex items-center gap-6 font-extralight text-xl">
        <h3 className="hover:text-blue-500 cursor-pointer">About Me</h3>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer font-semibold hover:shadow-lg">Contact Me</button>
      </div>
    </header>
  );
};

export default Header;
