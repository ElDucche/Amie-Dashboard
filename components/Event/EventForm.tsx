'use client'

import { AiOutlineCalendar } from 'react-icons/ai';
import Tag from '../../components/Tag';
import { Evenment } from '../../typing';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi'


export const EventForm = ({event}: {event: Evenment}) => {
    const modifyEvent = () => {
        // récupérer les datas du formulaire
        // Transformer ça en une query traitable par l'API :
        
    }
  return (
    <form className='grid gap-2 p-2 rounded-xl m-auto' onSubmit={modifyEvent}>
        {/* l'image de l'event */}
        <img src={event.image} className="w-full h-32 rounded-xl object-cover" />
        {/* Le titre de l'event */}
        <input 
            className='input input-bordered text-xl font-medium my-2 first-letter:capitalize' 
            name='label'
            defaultValue={event.label}

        />
        {/* La c'est la typologie de l'évènement mais on verra ça plus tard */}
        {/* <label className=''>
            <div className="flex items-center justify-between">
                <div className="">
                    <select className="select select-bordered w-44 text-center" id='selector'>
                        <option disabled selected value={"Security"}><Tag type={event.category}/></option>
                        <option value={"Security"}><Tag type="Security"/></option>
                        <option value={"Game"}><Tag type="Game" /></option>
                        <option value={"Analysis"}><Tag type="Analysis" /></option>
                        <option value={"Data"}><Tag type="Data" /></option>
                    </select>
                </div>
                <Tag type={event.category} />
            </div>
        </label> */}

        <label className='flex items-center'>
            <AiOutlineCalendar size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            <input 
                className='input input-bordered w-full'
                defaultValue={String(event.date_debut)}
            />
        </label>
        <label className='flex items-center'>
            <FaMapMarkerAlt size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            { event.lieuEntity ?
                <form action="" method="post">
                    <input type="text" defaultValue={event.lieuEntity.ville} />
                    <input type="text" defaultValue={event.lieuEntity.adresse} />
                    <input type="text" defaultValue={event.lieuEntity.codePostal} />
                    <input type="text" defaultValue={event.lieuEntity.localisation} />
                    <input type="text" defaultValue={event.lieuEntity.coordoneesGps} />
                </form>
                :

                <input
                    className='input input-bordered w-full' 
                    defaultValue={"En ligne"}
                />
            }
           
        </label>
        <label className='flex items-center'>
            <FaUsers size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            <p>{event.entrant} participants</p>
        </label>
        <label className='flex items-center'>
            <GiTeacher size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            <input
                className='input input-bordered w-full' 
                defaultValue={'Jonh Doe'}
            />
        </label>
        <label>
            Statut :
            <input 
                className='input input-bordered w-full' 
                defaultValue={(event.status === "Waiting" ? "En attente" : "Validé")}
            />
        </label>
        <button className='btn btn-primary' type='submit'>Modifier</button>
    </form>
  )
}
