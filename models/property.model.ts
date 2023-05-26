export interface IImageDetail {
    url: string;
    width: number;
    heigh: number;
    type: string;
}
export interface IDetailObj {
    type: string;
    value: number;
}

export interface IImages {
    data: Array<IImageDetail>;
}
export interface IDetail {
    data: Array<IDetailObj>
}

export interface IAmenitiesObj {
    group: string;
    available: string;
    title: string;
    type: string;
}

export interface IRatings {
    guestSatisfactionOverall: number;
}

export interface IAmenities {
    data: Array<IAmenitiesObj>
}

export interface ICountry {
    code: string;
    title: string;
}

export interface ILocation {
    lat: number;
    long: number;
    address: string;
    city: string;
    country: ICountry;
    zip: string;
}

export interface ICurrency {
    code: string;
    symbol: string;
    name: string;
}

export interface IAvatar {
    url: string;
    type: string;
}

export interface IHost {
    name: string;
    avatar: IAvatar;
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
    visibleReviewCount: number;
    host: IHost;
}

export interface IProperty {
    type: string;
    info: IInfo;
    category?: string;
}