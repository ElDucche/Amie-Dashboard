import Title from "../components/layout/Title";
import { Board } from "../components/Home/Board";
import { Card } from "../components/Home/Card";
import { Evenment, Lieu } from "../typing";
import Link from "next/link";

// http://amie.labinno-mtech.fr/api/

export default async function Home() {
    const todayDate = () => {
        const date = new Date()
        const day: string = date.getDate()<10 ? "0" + date.getDate().toString() : date.getDate().toString();
        const month: string = date.getMonth()<10 ? "0"+ date.getMonth().toString():date.getMonth().toString() ;
        const year: string = date.getFullYear().toString();
        return day + "/"+ month + "/" + year
    }
    const lieux = await fetch('http://amie.labinno-mtech.fr/api/lieu/getalllieux').then(res => res.json());
    const users = await fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateursavecroles').then(res => res.json());
    const events = await fetch('http://amie.labinno-mtech.fr/api/evenement/getallevenements').then(res => res.json());
    const testDate = () => {
        const dates = events.map((event: Evenment)=> event.date_debut);
        let messages = [];
        for (let i = 0; i<dates.length;i++) {
            dates[i] > todayDate() ? messages.push('true') : messages.push('false');
        }
        return messages
    }
    console.log(testDate());
    console.log(todayDate());
    return (
    <div className="">
        <Title>Accueil</Title>
        <div className="gap-6 h-screen grid mb-6">            
            <Board cols="3" title="Évènements">
                <Card title="En cours / À venir">
                    <span className="group-hover:hidden">  
                        {
                            events.filter((event: Evenment) => event.date_debut >= todayDate()).length
                        }
                    </span>
                    <ul className="hidden group-hover:block">
                        {
                            events.filter((event: Evenment) => event.date_debut >= todayDate()).map((event:Evenment) =>
                            <Link href='/events' className="text-sm my-px" key={event.idEvenement}><li className="text-sm font-semibold p-2 border border-primary hover:bg-primary hover:text-base-100 rounded-lg transition-all">{event.label}</li></Link>
                            )
                        }
                    </ul>
                </Card>
                <Card title="À valider">
                    <span className="group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                        {events.filter((event: Evenment )=> event.statut === "Waiting").length} 
                    </span>
                    <ul className="hidden group-hover:block">
                        {
                            events.filter((event: Evenment) => event.statut === "Waiting").map((event:Evenment) =>
                            <Link href='/events' className="text-sm my-1" key={event.idEvenement}><li className="text-sm my-1 font-semibold p-2 border border-primary hover:bg-primary hover:text-base-100 rounded-lg transition-all">{event.label}</li></Link>
                            )
                        }
                    </ul>
                </Card>
                <Card title="Passés">
                    <span className="group-hover:hidden">  
                        {
                            events.filter((event: Evenment) => event.date_debut <= todayDate()).length
                        }
                    </span>
                    <ul className="hidden group-hover:block">
                        {
                            events.filter((event: Evenment) => event.date_debut <= todayDate()).map((event:Evenment) =>
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
                            <div className="flex justify-around items-center border">
                                <div>
                                    <h3 className="text-lg font-semibold">Adresse</h3>
                                    <div>
                                    <p className="font-thin text-sm">{lieu.adresse}</p>
                                    <p className="font-thin text-sm">{lieu.codePostal}, {lieu.ville}</p>
                                    </div>

                                    </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{events.filter((event: Evenment) => event.lieu?.idLieu === lieu.idLieu).length > 1 ? 'Évènements prévus' : 'Évènement prévu'}</h3>
                                    <span className="text-lg font-thin">{events.filter((event: Evenment) => event.lieu?.idLieu === lieu.idLieu).length}</span>
                                </div>
                            </div>

                        </Card>
                    )
                }
            </Board>
            <div className="h-10"></div>
        </div>
    </div>
    )
}
  