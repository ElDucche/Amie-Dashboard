export type User = {
    id : number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: string;
    roles: Role[];
}

export type Role = {
    idRole: number;
    libelle: string;
}

export type Evenment = {
    dateCreationEvenement: Date;
    date_debut: string;
    date_fin:string;
    description: string;
    heure_debut: string;
    heure_fin: string;
    idEvenement: number;
    image: string;
    label: string;
    statut: string;
    lien_replay: string;
    lien_ressources: string;
    lieuEntity : Lieu | null;
}

export type Lieu = {
    adresse: string;
    codePostal: string;
    coordoneesGps: string;
    idLieu: number ;
    localisation: string;
    ville: string;
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