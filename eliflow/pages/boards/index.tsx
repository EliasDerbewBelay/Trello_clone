import Link from "next/link";

const mockBoards = [
  { id: "1", title: "EliFlow Development" },
  { id: "2", title: "Personal Tasks" },
];

const BoardsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Boards</h2>
      <div className="grid grid-cols-2 gap-4">
        {mockBoards.map((board) => (
          <Link
            key={board.id}
            href={`/boards/${board.id}`}
            className="bg-white shadow-md p-6 rounded hover:shadow-lg transition"
          >
            {board.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardsPage;
