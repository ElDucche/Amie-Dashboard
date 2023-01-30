export type User = {
    id : number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: string;
}

export type Evenment = {
    id: number;
    cover: string;
    title: string;
    body: string;
    category: string;
    entrant: number;
    createdAt: Date;
    place: string;
}