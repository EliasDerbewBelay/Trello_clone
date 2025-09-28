import { useRouter } from "next/router";
import { useState } from "react";

type Card = { id: string; title: string };
type List = { id: string; title: string; cards: Cards[] };

const BoardPage: React.FC = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [lists, setLists] = useState<List[]>([
    {
      id: "1",
      title: "To Do",
      cards: [{ id: "c1", title: "Set up Project repo" }],
    },
    {
      id: "c2",
      title: "In Progress",
      cards: [{ id: "c2", title: "Build board ui" }],
    },
    {
      id: "3",
      title: "Done",
      cards: [{ id: "c3", title: "Choose project name" }],
    },
  ]);

  return (
    <div>
      <h2>Board {boardId}</h2>
      <div>
        {lists.map((list, index) => (
          <div key={index}>
            <h3>{list.title}</h3>

            <div>
              {list.cards.map((card, index) => (
                <div key={index}>{card.title}</div>
              ))}
            </div>
          </div>
        ))}

        <button>+ Add List</button>
      </div>
    </div>
  );
};

export default BoardPage;
