export interface Product<T = Attribute> {
    id: number;
    name: string;
    attributes: Array<T>;
}

export type Attribute = Color | Size | Weight;

export interface Color {
    code: string;
    name: string;
    color: string;
}

export interface Size {
    code: string;
    name: string;
    size: {
        width: number;
        height: number;
    }
}

export interface Weight {
    code: string;
    name: string;
    weight: number
}

export type WithId<T> = { id: string; } & T;
