import { AddListFormProps } from "@/interfaces";
import { useState } from "react";

const AddListForm: React.FC<AddListFormProps> = ({ onAddList }) => {
  const [listTitle, setListTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddList(listTitle);
    setListTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg px-3 py-4 flex flex-col gap-2 "
    >
      <input
        type="text"
        placeholder="new card ..."
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
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

export default AddListForm;
