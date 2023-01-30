import Title from "../components/layout/Title";
import { FaHeart } from 'react-icons/fa'
import { Board } from "../components/Home/Board";
import { Card } from "../components/Home/Card";
import { Evenment } from "../typing";
import clsx from "clsx";

export default async function Home() {
    const req = await fetch("https://mockend.com/ElDucche/Amie-Dashboard/events");
    const eventsData: Evenment[] = await req.json();

    const tauxParticipation = Math.floor((eventsData.map(event => event.entrant).reduce((acc, curr) => acc + curr))/eventsData.length/1000*100);

    return (
    <div className="gap-6">
        <Title>Accueil</Title>
        <Board cols="3" title="Évènements">
            <Card title="En cours / À venir">
                <span>
                    {/* {eventsData.filter((event) => {
                        event.createdAt.valueOf() >= date.valueOf();
                    }).length} */}
                    12
                </span>
            </Card>
            <Card title="À valider">
                <span> 
                    {eventsData.filter(event => event.status === "Waiting").length} 
                </span>
            </Card>
            <Card title="Passés">
                <span>
                    {/* {eventsData.filter((event) => {
                        event.createdAt < date;
                    }).length} */}
                    21
                </span>
            </Card>
        </Board>
        
        <Board cols="2" title="Taux">
            <Card title="Taux de participation globale">
                <div className={clsx("radial-progress", (tauxParticipation >= 50 ? "text-primary" : "text-warning") )} style={{"--value": tauxParticipation}}>
                    {tauxParticipation}%
                </div>
            </Card>
            <Card title="Taux de satisfaction">

            </Card>
        </Board>

        <div className="grid grid-cols-3  p-6 border border-neutral/20 rounded-xl my-2">
        <h1 className=" col-span-3 text-3xl h-16">Lieux</h1>
            <div className=" place-self-center text-center">
                <h3>Paris</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date n'est pas passé */}
                <span> 12 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Tours</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date est passé */}
                <span> 43 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Nancy</h3>
                {/* To Do : afficher le nombre d'évenèments dont le status est 'En cours' */}
                <span className="place-items-center"> 26 </span>
            </div>
        </div>
        <div className="grid grid-cols-4  p-6 border border-neutral/20 rounded-xl my-2">
        <h1 className=" col-span-4 text-3xl">Demandes</h1>
            <div className=" place-self-center text-center">
                <h3>Validations d'évènements</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date n'est pas passé */}
                <span> 12 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Accréditations</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date est passé */}
                <span> 43 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Création d'utilisateur</h3>
                {/* To Do : afficher le nombre d'évenèments dont le status est 'En cours' */}
                <span className="place-items-center"> 26 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Nouvelles Questions F.A.Q</h3>
                {/* To Do : afficher le nombre d'évenèments dont le status est 'En cours' */}
                <span className="place-items-center"> 26 </span>
            </div>
        </div>

    </div>
    )
}
  