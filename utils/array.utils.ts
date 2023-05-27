import { IProperty } from "@/models/property.model";

export function removeDuplicateObjectsById(arr: Array<IProperty>) {
    const uniqueObjects = [];
    const ids = new Set();

    for (const obj of arr) {
        if (!ids.has(obj.info.id) && obj.category) {
            uniqueObjects.push(obj);
            ids.add(obj.info.id);
        }
    }

    return uniqueObjects;
}