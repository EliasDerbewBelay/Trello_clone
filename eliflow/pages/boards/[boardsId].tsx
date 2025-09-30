import AddCardsForm from "@/components/Forms/AddCardsForm";
import AddListsForm from "@/components/Forms/AddListsForm";
import { FaDeleteLeft } from "react-icons/fa6";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Card = { id: string; title: string };
type List = { id: string; title: string; cards: Card[] };

const getStorageKey = (boardId: string) => `trello_clone_board_${boardId}`;

const BoardPage: React.FC = () => {
  const router = useRouter();
  const { boardId } = router.query;

  const [lists, setLists] = useState<List[]>([]);

  // ✅ Load from localStorage for this board
  useEffect(() => {
    if (!boardId) return;
    const saved = localStorage.getItem(getStorageKey(boardId as string));
    if (saved) {
      setLists(JSON.parse(saved));
    } else {
      // fallback initial data
      setLists([
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
    }
  }, [boardId]);

  // ✅ Save changes to localStorage for this board
  useEffect(() => {
    if (boardId && lists.length > 0) {
      localStorage.setItem(
        getStorageKey(boardId as string),
        JSON.stringify(lists)
      );
    }
  }, [lists, boardId]);

  const onDragEnd = (result: any) => {
    const { source, destination, type } = result;
    if (!destination) return;

    if (type === "LIST") {
      const newLists = Array.from(lists);
      const [movedList] = newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, movedList);
      setLists(newLists);
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const listIndex = lists.findIndex((i) => i.id === source.droppableId);
      const newCards = Array.from(lists[listIndex].cards);
      const [moved] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, moved);

      const newLists = [...lists];
      newLists[listIndex].cards = newCards;
      setLists(newLists);
    } else {
      const sourceListIndex = lists.findIndex(
        (i) => i.id === source.droppableId
      );
      const destListIndex = lists.findIndex(
        (i) => i.id === destination.droppableId
      );

      const sourceCards = Array.from(lists[sourceListIndex].cards);
      const destCards = Array.from(lists[destListIndex].cards);

      const [moved] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, moved);

      const newLists = [...lists];
      newLists[sourceListIndex].cards = sourceCards;
      newLists[destListIndex].cards = destCards;
      setLists(newLists);
    }
  };

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

  const handleDeleteCard = (listId: string, cardId: string) => {
    setLists((prevList) =>
      prevList.map((list) =>
        list.id === listId
          ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
          : list
      )
    );
  };

  const handleDeleteList = (listId: string) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  return (
    <div className="p-6 min-h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <h2 className="text-2xl font-bold mb-6">Board {boardId}</h2>

        <Droppable droppableId="board" direction="horizontal" type="LIST">
          {(provided) => (
            <div
              className="flex gap-6 overflow-x-auto"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists.map((list, listIndex) => (
                <Draggable
                  draggableId={list.id}
                  index={listIndex}
                  key={list.id}
                >
                  {(provided) => (
                    <div
                      className="bg-gray-100 rounded p-4 w-64 flex-shrink-0"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        className="flex items-center justify-between mb-3 cursor-grab"
                        {...provided.dragHandleProps}
                      >
                        <h3 className="font-semibold">{list.title}</h3>
                        <button
                          className="cursor-pointer font-bold text-xl hover:text-red-500 active:text-red-700"
                          onClick={() => handleDeleteList(list.id)}
                        >
                          ✕
                        </button>
                      </div>

                      <Droppable droppableId={list.id} type="CARD">
                        {(provided) => (
                          <div
                            className="space-y-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {list.cards.map((card, cardIndex) => (
                              <Draggable
                                key={card.id}
                                draggableId={card.id}
                                index={cardIndex}
                              >
                                {(provided) => (
                                  <div
                                    className="bg-white p-3 rounded shadow hover:shadow-md cursor-pointer flex justify-between items-center"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <h3>{card.title}</h3>
                                    <button
                                      onClick={() =>
                                        handleDeleteCard(list.id, card.id)
                                      }
                                    >
                                      <FaDeleteLeft
                                        size={20}
                                        className="cursor-pointer hover:shadow-lg"
                                      />
                                    </button>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}

                            <AddCardsForm
                              onAddCard={(title) =>
                                handleAddCard(list.id, title)
                              }
                            />
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}

              <AddListsForm onAddList={handleAddList} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BoardPage;
