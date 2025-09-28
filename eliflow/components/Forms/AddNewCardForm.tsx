import { useState } from "react";
import { AddCardFormProps } from "@/interfaces";

const AddNewCardForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
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
      className="flex flex-col gap-4 bg-gray-100 shadow p-4 rounded-sm max-h-[8rem]"
    >
      <input
        type="text"
        placeholder="Add New List ..."
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        className="border px-4 py-1 rounded-sm"
      />
      <button type="submit" className="bg-blue-500 py-2 rounded-sm cursor-pointer hover:shadow-lg text-white text-xl">
        + Add{" "}
      </button>
    </form>
  );
};

export default AddNewCardForm;
