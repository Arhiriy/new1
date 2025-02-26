import { ArrowDownUp } from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) =>  {
  return (
    <>
      <div className="flex items-center gap-2">
        <div><ArrowDownUp size={16}/></div>
        <div><h1 className="font-extrabold">Сортировка:</h1></div>
        <div><p className="text-orange-500 font-extrabold">рейтингу</p></div>
      </div>
    </>
  );
}