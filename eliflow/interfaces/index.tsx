export interface AddCardFormProps {
  onAddCard: (title: string) => void;
}

export interface AddListFormProps {
  onAddList: (title: string) => void;
}

export interface BoardMetaProps {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  listsCount: number;
  cardsCount: number;
}
