import { AddCardFormProps } from "@/interfaces";
import { useState } from "react";

const AddCardsForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
  const [cardTitle, setCardTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardTitle.trim()) return;
    onAddCard(cardTitle);
    setCardTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg px-3 py-4 flex flex-col gap-2 "
    >
      <input
        type="text"
        placeholder="new card ..."
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        className="border px-3 py-1 rounded-sm"
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-1 rounded-sm shadow-md hover:shadow-lg cursor-pointer"
      >
        + Add
      </button>
    </form>
  );
};

export default AddCardsForm;
