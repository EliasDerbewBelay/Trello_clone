import Link from "next/link";

const mockBoards = [
  { id: "1", title: "EliFlow Development" },
  { id: "2", title: "Personal Tasks" },
];

const BoardsPage = () => {
  return (
    <div className="p-6 flex flex-col items-start gap-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Boards</h2>
      <div className="grid grid-cols-5 gap-4 min-h-[8rem] ">
        {mockBoards.map((board) => (
          <Link
            key={board.id}
            href={`/boards/${board.id}`}
            className="bg-slate-50 shadow-md p-6 rounded hover:shadow-lg transition"
          >
            {board.title}
          </Link>
        ))}
      </div>

      <button className="bg-blue-500 px-6 py-3 rounded-sm text-white font-semibold text-xl cursor-pointer hover:shadow-lg">+ Add New Board</button>
    </div>
  );
};

export default BoardsPage;
