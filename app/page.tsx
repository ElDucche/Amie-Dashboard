import Title from "../components/layout/Title";
import { FaHeart } from 'react-icons/fa'

export default function Home() {
    return (
    <div className="gap-6">
        <Title>Accueil</Title>
        <div className="grid grid-cols-3 grid-rows-2 p-6 border border-neutral/20 rounded-xl my-2">
            <h1 className="col-span-3 text-3xl h-16">Évènements</h1>
            <div className=" place-self-center text-center">
                <h3>Evenements en cours</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date n'est pas passé */}
                <span> 12 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Evenements passés</h3>
                {/* To Do : afficher le nombre d'évenèments dont la date est passé */}
                <span> 43 </span>
            </div>
            <div className=" place-self-center text-center">
                <h3>Evenements en attente de validation</h3>
                {/* To Do : afficher le nombre d'évenèments dont le status est 'En cours' */}
                <span className="place-items-center"> 26 </span>
            </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2  p-6 border border-neutral/20 rounded-xl my-2">
            <h1 className=" col-span-2 text-3xl h-16">Taux</h1>
            <div className="text-center">
                <h3>Taux de participation global</h3>
                {/* To Do : afficher la valeur de (tous les participant ÷ nombre d'event / 1000 x) 100 */}
                <div className="radial-progress" style={{"--value": 70}}>70%</div>
            </div>
            <div className=" text-center">
                <h3>Taux de satisfaction</h3>
                {/* To Do : afficher la note moyenne des évènements passés */}
                <span className="flex items-center justify-center text-xl font-semibold place-self-center"> 4,3 <FaHeart className="mx-2"/> </span>
            </div>
        </div>
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
  