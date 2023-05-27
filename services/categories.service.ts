import { ICategory, ICategoryFilter, IData } from '@/interfaces/common.interface';
import data from '../data/data.json';

class CategoriesService {

    getCategories() {
        const result = data as unknown as IData;
        return result.categories.map((category) => {
            const categoryFilter: ICategoryFilter = {
                category,
                selected: false
            };
            return categoryFilter;
        })
    }
}
export const categoriesService = new CategoriesService();