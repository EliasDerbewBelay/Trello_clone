const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-slate-100">
      <h1 className="font-semibold text-6xl text-slate-700 mb-4">Trello Application Project Set Up</h1>
      <p className="font-extralight text-4xl text-slate-600">Lets Clone Trello together</p>
      <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-xl mt-4 cursor-pointer hover:shadow-md">Get Started</button>
    </div>
  );
};

export default Home;
