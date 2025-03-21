import { Button, Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
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
                        <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0}/>
                        <Input type="number" min={0} max={5000} placeholder="0" />
                    </div>
                </div>
                <div>
                    <CheckboxFiltersGroup
                        className="mt-5"
                        title="Ингредиенты"
                        limit={6}
                        defaultItems={[
                            {
                                text: 'Сырный соус',
                                value: '1',
                            },
                            {
                                text: 'Моццарелла',
                                value: '2',
                            },
                            {
                                text: 'Чеснок',
                                value: '3',
                            },
                            {
                                text: 'Солённые огурчики',
                                value: '4',
                            },
                            {
                                text: 'Красный лук',
                                value: '5',
                            },
                            {
                                text: 'Томаты',
                                value: '6',
                            },
                        ]}
                        items={[
                            {
                                text: 'Сырный соус',
                                value: '1',
                            },
                            {
                                text: 'Моццарелла',
                                value: '2',
                            },
                            {
                                text: 'Чеснок',
                                value: '3',
                            },
                            {
                                text: 'Солённые огурчики',
                                value: '4',
                            },
                            {
                                text: 'Красный лук',
                                value: '5',
                            },
                            {
                                text: 'Томаты',
                                value: '6',
                            },
                        ]}
                    />
                </div>
                <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                    <h1 className="font-bold mb-3">Тип теста:</h1>
                    
                </div>
                <div>
                    <Button variant="default" className='gap-2'>Применить</Button>
                </div>
            </div>
        </>
    );
}