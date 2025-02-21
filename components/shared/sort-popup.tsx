import { ArrowDownUp } from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) =>  {
  return (
    <>
      <div>
        <ArrowDownUp size={16}/>
        <h1 className="">Сортировка:</h1>
        <p className="text-orange-500">рейтингу</p>
      </div>
    </>
  );
}