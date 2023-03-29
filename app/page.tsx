import Title from "../components/layout/Title";
import { Board } from "../components/Home/Board";
import { Card } from "../components/Home/Card";
import { Evenment, Lieu } from "../typing";
import Link from "next/link";

// http://amie.labinno-mtech.fr/api/

export default async function Home() {
    const todayDate = new Date().toISOString();
    const lieux = await fetch('http://amie.labinno-mtech.fr/api/lieu/getalllieux').then(res => res.json());
    //const users = await fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateursavecroles').then(res => res.json());
    const events = await fetch('http://amie.labinno-mtech.fr/api/evenement/getallevenements').then(res => res.json());
    return (
    <div className="">
        <Title>Accueil</Title>
        <div className="gap-6 h-screen grid mb-6">            
            <Board cols="3" title="Évènements">
                <Card title="En cours / À venir">
                    <span className="card">  
                        {
                            events.filter((event: Evenment) => event.date_debut >= todayDate).length
                        }
                    </span>
                    <ul className="card-hover">
                        {
                            events.filter((event: Evenment) => event.date_debut >= todayDate).map((event:Evenment) =>
                            <Link href='/events' className="text-sm my-px" key={event.idEvenement}><li className="text-sm font-semibold p-2 border border-primary hover:bg-primary hover:text-base-100 rounded-lg transition-all">{event.label}</li></Link>
                            )
                        }
                    </ul>
                </Card>
                <Card title="À valider">
                    <span className="card">
                        {events.filter((event: Evenment )=> event.statut === "Waiting").length} 
                    </span>
                    <ul className="card-hover">
                        {
                            events.filter((event: Evenment) => event.statut === "Waiting").map((event:Evenment) =>
                            <Link href='/events' className="text-sm my-1" key={event.idEvenement}><li className="text-sm my-1 font-semibold p-2 border border-primary hover:bg-primary hover:text-base-100 rounded-lg transition-all">{event.label}</li></Link>
                            )
                        }
                    </ul>
                </Card>
                <Card title="Passés">
                    <span className="card">  
                        {
                            events.filter((event: Evenment) => event.date_debut <= todayDate).length
                        }
                    </span>
                    <ul className="card-hover">
                        {
                            events.filter((event: Evenment) => event.date_debut <= todayDate).map((event:Evenment) =>
                            <Link href='/events' className="text-sm my-px" key={event.idEvenement}><li className="text-sm font-semibold p-2 border border-primary hover:bg-primary hover:text-base-100 rounded-lg transition-all">{event.label}</li></Link>
                            )
                        }
                    </ul>
                </Card>
            </Board>

            <Board cols="2" title="Lieux">
                {
                    lieux.map((lieu: Lieu) => 
                    <Card title={lieu.localisation} key={lieu.idLieu}>
                            <div className="flex justify-between md:justify-around items-center w-full">
                                <div className="text-center">
                                    <h3 className="text-sm font-semibold">Adresse</h3>
                                    <div>
                                        <p className="font-thin text-xs">{lieu.adresse}</p>
                                        <p className="font-thin text-xs">{lieu.codePostal}, {lieu.ville}</p>
                                    </div>

                                    </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-semibold">{events.filter((event: Evenment) => event.lieu?.idLieu === lieu.idLieu).length > 1 ? 'Évènements prévus' : 'Évènement prévu'}</h3>
                                    <span className="text-sm font-thin">{events.filter((event: Evenment) => event.lieu?.idLieu === lieu.idLieu).length}</span>
                                </div>
                            </div>

                        </Card>
                    )
                }
            </Board>
            {/* <div className="h-8"></div> */}
        </div>
    </div>
    )
}
  