import { ICategory, ICategoryFilter } from "@/interfaces/common.interface";
import FilterCategory from "./FilterCategory";

interface IFilterSection {
    filter: Array<ICategoryFilter>
}
const FilterSection = (props: IFilterSection) => {
    return (
        <section className="flex items-stretch overflow-y-scroll no-scrollbar bg-gray-50 p-1 m-2 mx-10 my-3">
            {props.filter.map(filter => {
                return (
                    <FilterCategory key={filter.category.id} filter={filter} />
                )
            })}
        </section>
    )
}
export default FilterSection;