export type User = {
    dateDerniereInitialisationMotDePasse: string;
    idUtilisateur : number;
    mail: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    roles: Role[];
}

export type Role = {
    idRole: number;
    libelle: string;
}

export type Evenment = {
    dateCreationEvenement: Date;
    date_debut: string;
    date_fin: string;
    description: string;
    heure_debut: string;
    heure_fin: string;
    idEvenement: number;
    image: string;
    label: string;
    statut: string;
    lien_replay: string;
    lien_ressources: string;
    lieu : Lieu | null;
    utilisateur: User;
}

export type Lieu = {
    adresse: string;
    codePostal: string;
    coordoneesGps: string;
    idLieu: number ;
    localisation: string;
    ville: string;
    places:number;
}
export type Faq = {
    question: string;
    reponse: string;
}