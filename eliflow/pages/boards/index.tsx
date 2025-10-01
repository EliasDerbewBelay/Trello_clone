import Link from "next/link";
import { BoardMetaProps } from "@/interfaces";
import { useState, useEffect } from "react";

const BoardsPage: React.FC = () => {
  const [boards, setBoards] = useState<BoardMetaProps[]>([]);
  const [newBoardTItle, setNewBoardTitle] = useState("");

  // Load Boards
  useEffect(() => {
    const saved = localStorage.getItem("trello_clone_boards");
    if (saved) setBoards(JSON.parse(saved));
  }, []);

  // Save Boards
  useEffect(() => {
    localStorage.setItem("trello_clone_boards", JSON.stringify(boards));
  }, [boards]);

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
            className="bg-slate-50 shadow-md px-3 py-1 rounded-lg hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-2xl text-slate-700">
                {board.title}
              </h2>

              <p className="font-extralight">
                {board.listsCount} Lists • {board.cardsCount} Cards
              </p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-slate-700/50 text-sm">
                Created: {new Date(board.createdAt).toLocaleDateString()}
              </p>
              <p className="text-slate-700/50 text-sm">
                Updated: {new Date(board.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}

        <div>
          <form
            onSubmit={handleAddBoard}
            className="bg-slate-50/40 p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer flex flex-col gap-4 max-h-[14rem]"
          >
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
