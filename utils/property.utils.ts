import { IProperty } from "@/models/property.model"

export const getPropertyDetails = (proper: IProperty) => {
    let detail = "";
    proper.info.details.data.forEach((d) => {
        detail = detail + `${d.value} ${d.type} · `;
    });

    return detail;
}