import { IData } from "@/interfaces/common.interface";
import data from "../data/data.json";

class PropertiesService {
    getProperties() {
        const result = data as unknown as IData;
        return result.data.filter(d => !d.category);
    }

    getPropertiesByCategoryId(categoryId: string) {
        const result = data as unknown as IData;
        return result.data.filter(d => d.category && d.category === categoryId);
    }
    getAllProperties() {
        const result = data as unknown as IData;
        return result.data;
    }
}

export const propertiesService = new PropertiesService();