export function removeDuplicateObjectsById(arr: Array<any>) {
    const uniqueObjects = [];
    const ids = new Set();

    for (const obj of arr) {
        if (!ids.has(obj.id)) {
            uniqueObjects.push(obj);
            ids.add(obj.id);
        }
    }

    return uniqueObjects;
}