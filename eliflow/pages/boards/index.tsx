import Link from "next/link";

const mockBoards = [
  { id: "1", title: "EliFlow Development" },
  { id: "2", title: "Personal Tasks" },
];

const BoardsPage: React.FC = () => {
  return (
    <div>
      <h2>Your Boards</h2>

      <div>
        {mockBoards.map((board, index) => (
          <Link key={index} href={`/boards/${board.id}`}>
            {board.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardsPage;
