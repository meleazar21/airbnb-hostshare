import { IData } from "@/interfaces/common.interface";
import data from "../data/data.json";
import { IInfo } from "@/models/property.model";
import { removeDuplicateObjectsById } from "@/utils/array.utils";

class PropertiesService {
    getProperties() {
        const result = data as IData;
        return result.data;
    }
}

export const propertiesService = new PropertiesService();