import { IProperty } from "@/models/property.model";

export interface ICategory {
    id: string;
    type: string;
    title: string;
}

export interface IData {
    source: string;
    type: string;
    categories: Array<ICategory>;
    data: Array<IProperty>
}

export interface ICategoryFilter {
    category: ICategory;
    selected: boolean;
}