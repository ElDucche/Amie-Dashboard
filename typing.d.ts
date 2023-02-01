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
    status: string;
}

export type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    // mail: string;
    // motDePasse: string;
    // dateDerniereInitialisationMotDePasse: Date;
}

export type Faq = {
    question: string;
    reponse: string;
}