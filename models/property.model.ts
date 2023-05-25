interface IImageDetail {
    url: string;
    width: number;
    heigh: number;
    type: string;
}
interface IDetailObj {
    type: string;
    value: number;
}

interface IImages {
    data: Array<IImageDetail>;
}
interface IDetail {
    data: Array<IDetailObj>
}

interface IAmenitiesObj {
    group: string;
    available: string;
    title: string;
    type: string;
}

interface IRatings {
    guestSatisfactionOverall: number;
}

interface IAmenities {
    data: Array<IAmenitiesObj>
}

interface ICountry {
    code: string;
    title: string;
}

interface ILocation {
    lat: number;
    long: number;
    address: string;
    city: string;
    country: ICountry;
    zip: string;
}

interface ICurrency {
    code: string;
    symbol: string;
    name: string;
}

export interface IInfo {
    type: string;
    images: IImages;
    details: IDetail;
    description: string;
    mainImage: IImageDetail;
    maxGuestCapacity: number;
    amenities: IAmenities;
    title: string;
    id: string;
    location: ILocation
    ratings: IRatings
    price: number;
    currency: ICurrency;
    category?: string;
}

export interface IProperty {
    type: string;
    info: IInfo
}