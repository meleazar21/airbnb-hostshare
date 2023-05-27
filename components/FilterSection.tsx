import { ICategoryFilter } from "@/interfaces/common.interface";
import FilterCategory from "./FilterCategory";

interface IFilterSection {
    filter: Array<ICategoryFilter>
    onHandleClick: Function;
}
const FilterSection = (props: IFilterSection) => {
    const handleClick = (filter: { categoryId: string; selected: boolean }) => {
        props.onHandleClick(filter);
    }
    return (
        <section className="flex items-stretch overflow-y-scroll no-scrollbar bg-gray-50 p-1 m-2 mx-10 my-3">
            {props.filter.map(filter => {
                return (
                    <FilterCategory onHandleClick={handleClick} key={filter.category.id} filter={filter} />
                )
            })}
        </section>
    )
}
export default FilterSection;