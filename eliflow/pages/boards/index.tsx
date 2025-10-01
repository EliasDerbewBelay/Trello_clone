import Link from "next/link";
import { BoardMetaProps } from "@/interfaces";
import { useState, useEffect } from "react";

const mockBoards = [
  { id: "1", title: "EliFlow Development" },
  { id: "2", title: "Personal Tasks" },
];

const BoardsPage: React.FC = () => {
  const [boards, setBoards] = useState<BoardMetaProps[]>([]);
  const [newBoardTItle, setNewBoardTitle] = useState("");

  const handleAddBoard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBoardTItle.trim()) return;

    const now = new Date().toISOString();

    const newBoard: BoardMetaProps = {
      id: Date.now().toString(),
      title: newBoardTItle.trim(),
      createdAt: now,
      updatedAt: now,
      listsCount: 0,
      cardsCount: 0,
    };

    setBoards([...boards, newBoard]);
    setNewBoardTitle("");
  };

  return (
    <div className="p-6 flex flex-col items-start gap-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Boards</h2>
      <div className="grid grid-cols-5 gap-4 min-h-[8rem] ">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/boards/${board.id}`}
            className="bg-slate-50 shadow-md p-6 rounded hover:shadow-lg transition"
          >
            {board.title}
          </Link>
        ))}

        <div >
          <form onSubmit={handleAddBoard} className="bg-slate-50/40 p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex flex-col gap-4 max-h-[14rem]">
            <input
              type="text"
              placeholder="board name ..."
              value={newBoardTItle}
              onChange={(e) => setNewBoardTitle(e.target.value)}
              className="border px-3 py-1 rounded-sm"
            />
            <button className="bg-blue-500  py-1 rounded-sm text-white font-semibold text-xl cursor-pointer hover:shadow-lg">
              + Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
