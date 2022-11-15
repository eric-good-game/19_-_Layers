export interface IProduct {
    name: string;
    author_id: string;
    type: string;
    year: string;
    price: number;
    genres_id: string[];
    image_url: string;
}

export interface IGenericModel {
    value: string | number;
}