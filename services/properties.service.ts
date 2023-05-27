import { IData } from "@/interfaces/common.interface";
import data from "../data/data.json";

class PropertiesService {
    getProperties() {
        const result = data as IData;
        return result.data.filter(d => !d.category);
    }

    getPropertiesByCategoryId(categoryId: string) {
        const result = data as IData;
        return result.data.filter(d => d.category && d.category === categoryId);
    }
}

export const propertiesService = new PropertiesService();