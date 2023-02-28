import Title from "../components/layout/Title";
import { FaHeart } from 'react-icons/fa'
import { Board } from "../components/Home/Board";
import { Card } from "../components/Home/Card";
import { Evenment } from "../typing";
import clsx from "clsx";

export default async function Home() {
    // const req = await fetch("https://mockend.com/ElDucche/Amie-Dashboard/events");
    // const eventsData: Evenment[] = await req.json();
    const date = new Date()

   // const tauxParticipation = Math.floor((eventsData.map(event => event.entrant).reduce((acc, curr) => acc + curr))/eventsData.length/1000*100);

    return (
    <div className="gap-6 w-full h-screen grid place-content-center place-items-center">
        <Title>Accueil</Title>
        <Board cols="3" title="Évènements">
            <Card title="En cours / À venir">
                <span>  To do
                    {/* {eventsData.map(event => event.createdAt).filter((eventDate) => {
                        eventDate >= new Date('2023-02-01T00:00:00Z')
                    }).length} */}
                    
                </span>
            </Card>
            <Card title="À valider">
                <span> To do
                    {/* {eventsData.filter(event => event.status === "Waiting").length}  */}
                </span>
            </Card>
            <Card title="Passés">
                <span>
                    {/* {eventsData.map(event => event.createdAt).filter((eventDate) => {
                        eventDate.valueOf() <= date.valueOf();
                    }).length} */}
                </span>
            </Card>
        </Board>
        
        <Board cols="2" title="Taux">
            <Card title="Taux de participation globale">
                {/* @ts-ignore */}
                <span> To do
                    {/* {tauxParticipation}% */}
                </span>
            </Card>
            <Card title="Taux de satisfaction">
                    <label className="transition-all duration-150 flex items-center justify-center">
                        <p>9.87</p>
                        <FaHeart  className="mx-2"/>
                    </label>
            </Card>
        </Board>

        <Board cols="2" title="Lieux">
            <Card title="Paris">
                <span> To do
                    {/* {
                        eventsData.map(event => event.place).filter(place => place === "Paris").length
                    } */}
                </span>
            </Card>
            <Card title="Tours">
            <span>To do
                    {/* {
                        eventsData.map(event => event.place).filter(place => place === "Tours").length
                    } */}
                </span>
            </Card>
            <Card title="Nancy">
            <span> to do
                    {/* {
                        eventsData.map(event => event.place).filter(place => place === "Nancy").length
                    } */}
                </span>
            </Card>
            <Card title="En ligne">
            <span> to do
                    {/* {
                        eventsData.map(event => event.place).filter(place => place === "En ligne").length
                    } */}
                </span>
            </Card>

        </Board>
    </div>
    )
}
  