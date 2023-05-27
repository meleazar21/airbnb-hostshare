import { MINIMUM_GUESTS } from "@/constants/commonStrings";
import { IProperty } from "@/models/property.model";
import data from "../data/data.json";
import { ICategory } from "@/interfaces/common.interface";

export const getPropertyDetails = (proper: IProperty) => {
    let detail = "";
    proper.info.details.data.forEach((d) => {
        detail = detail + `${d.value} ${d.type} · `;
    });

    return detail;
}

export const calculateSubtotal = (price: number, nights: number, guests: number, guestsLimit: number) => {
    if (guests < parseInt(MINIMUM_GUESTS) && guests > 0 && nights === 1) return price;
    const pricePerGuest = guests < parseInt(MINIMUM_GUESTS) ? price : (price / guestsLimit);
    const result = pricePerGuest * guests * nights;
    return result;
}

export const getCategoryName = (categoryId: string, categories: Array<ICategory>) => {
    return categories.find(c => c.id === categoryId)?.title;
}
