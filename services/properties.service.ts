import { IData } from "@/interfaces/common.interface";
import data from "../data/data.json";
import { IInfo } from "@/models/property.model";
import { removeDuplicateObjectsById } from "@/utils/array.utils";

class PropertiesService {
    getProperties() {
        const result = data as IData;
        const uniqueElements = removeDuplicateObjectsById(result.data);
        console.log({ uniqueElements });
        return uniqueElements;
    }
}

export const propertiesService = new PropertiesService();