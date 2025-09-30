import AddCardsForm from "@/components/Forms/AddCardsForm";
import AddListsForm from "@/components/Forms/AddListsForm";

import { useRouter } from "next/router";
import { useState } from "react";

type Card = { id: string; title: string };
type List = { id: string; title: string; cards: Card[] };

const BoardPage: React.FC = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [lists, setLists] = useState<List[]>([
    {
      id: "1",
      title: "To Do",
      cards: [{ id: "c1", title: "Set up project repo" }],
    },
    {
      id: "2",
      title: "In Progress",
      cards: [{ id: "c2", title: "Build board UI" }],
    },
    {
      id: "3",
      title: "Done",
      cards: [{ id: "c3", title: "Choose project name" }],
    },
  ]);

  const handleAddList = (title: string) => {
    const newList: List = {
      id: Date.now().toString(),
      title,
      cards: [],
    };

    setLists([...lists, newList]);
  };

  const handleAddCard = (listId: string, cardTitle: string) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                { id: Date.now().toString(), title: cardTitle },
              ],
            }
          : list
      )
    );
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Board {boardId}</h2>
      <div className="flex gap-6 overflow-x-auto">
        {lists.map((list) => (
          <div
            key={list.id}
            className="bg-gray-100 rounded p-4 w-64 flex-shrink-0"
          >
            <h3 className="font-semibold mb-3">{list.title}</h3>
            <div className="space-y-2">
              {list.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-3 rounded shadow hover:shadow-md cursor-pointer flex flex-col gap-4"
                >
                  <div className="">{card.title}</div>
                </div>
              ))}
              <AddCardsForm
                onAddCard={(title) => handleAddCard(list.id, title)}
              />
            </div>
          </div>
        ))}

        <AddListsForm onAddList={handleAddList} />
      </div>
    </div>
  );
};

export default BoardPage;
