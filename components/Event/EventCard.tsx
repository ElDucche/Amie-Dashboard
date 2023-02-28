import React from 'react'
import { AiOutlineCalendar, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiDocumentSearch } from 'react-icons/hi';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md'
import { Evenment } from '../../typing';
import { ModifyEventButton } from '../layout/ModifyEventButton';
import clsx from 'clsx';
import Link from 'next/link';
import { DeleteEventButton } from '../layout/DeleteEventButton';

function EventCard({event} : {event: Evenment;}) {
  return (
      <div className={clsx("group relative bg-base-100 w-64 border rounded-xl drop-shadow-md p-2",(event.statut === "En cours" ? "border-2 border-warning/20 hover:border-warning/60" : event.statut === "Validé" ? "border-2 border-primary/20 hover:border-primary/60" : "border-2 border-error/20 hover:border-error/60"))}>
        <div className='absolute inset-0 group-hover:backdrop-blur rounded-xl'></div>
        <ModifyEventButton event={event} />
        <DeleteEventButton event={event} />
        <div className="grid gap-4">
        <img src={`data:image/png;base64, ${event.image}`} className='w-full h-20 object-cover rounded-lg'/>
        <h3 className='text-xl font-medium ml-2 first-letter:capitalize'>{event.label}</h3>
        <span className='font-thin text-sm flex items-center'><AiOutlineInfoCircle size={30} className=' text-rose-800 mx-4'/>{event.description}</span>
        <span className=' flex font-light text-sm items-center'><AiOutlineCalendar size={20} className=' text-rose-800 mx-4'/> {event.date_debut} - {event.date_fin}</span>
        <span className='flex font-thin items-center'>
            {(event.lieu === null ) ? <BsCameraVideo size={20} className='text-rose-800 mx-4'/> : <FaMapMarkerAlt size={20} className='text-rose-800 mx-4'/> }
            {event.lieu ? event.lieu.localisation : "En ligne"}
        </span>
        <div className='grid grid-cols-2 gap-2 place-content-center text-center'> <h4 className='font-thin col-span-2'>Liens ressources :</h4> <Link href={event.lien_replay} className='flex place-content-center'><MdOndemandVideo size={30} /></Link> <Link href={event.lien_ressources} className='flex place-content-center'><HiDocumentSearch size={30} /></Link></div>
        </div>
      </div>
  )
}

export default EventCard