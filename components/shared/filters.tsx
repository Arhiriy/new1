import { Input } from "../ui";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";



interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <>
            <div className={className}>
                <Title text="Фильтрация" size="sm" className="font-extrabold"/>
                <div className=" flex flex-col gap-4">
                    <FilterCheckbox  text="Можно собирать" value="1"/>
                    <FilterCheckbox text="Новинки" value="2"/>
                </div>
                <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                    <h1 className="font-bold mb-3">Цена от и до:</h1>
                    <div className="flex gap-3 mb-5">
                        <Input type="number" placeholder="0" min={0} max={10} defaultValue={0}/>
                        <Input type="number" min={0} max={5000} placeholder="0" />
                    </div>
                </div>
            </div>
        </>
    );
}