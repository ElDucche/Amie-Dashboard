export type User = {
    id : number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export type Event = {
    id: number;
    cover: string;
    title: string;
    body: string;
    category: string;
    entrant: number;
    createdAt: string;
    place: string;
}