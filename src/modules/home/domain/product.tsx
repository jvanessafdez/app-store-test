export enum ECategory{
    ELEMENT = "ELEMENT",
    CLOTHES = "CLOTHES",
    SHOES = "SHOES"
}

export interface Product {
    id?: number;
    title: string;
    image?: string;
    description: string;
    price: string;
    quantity: number;
    category?: ECategory;
}