import { useState } from "react";
import { AddListFormProps } from "@/interfaces";

const AddListsForm: React.FC<AddListFormProps> = ({ onAddList }) => {
  const [listTitle, setListTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!listTitle.trim()) return;
    onAddList(listTitle);
    setListTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-gray-100 shadow p-4 rounded-sm max-h-[8rem]"
    >
      <input
        type="text"
        placeholder="Add New List ..."
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
        className="border px-4 py-1 rounded-sm"
      />
      <button
        type="submit"
        className="bg-blue-500 py-2 rounded-sm cursor-pointer hover:shadow-lg text-white text-xl"
      >
        + Add{" "}
      </button>
    </form>
  );
};

export default AddListsForm;
