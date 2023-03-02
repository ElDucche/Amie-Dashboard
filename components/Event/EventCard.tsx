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
      <div className="group relative bg-base-100 w-72 h-full border rounded-lg p-2 border-secondary shadow-mgen hover:shadow-[0_0_10px_0_rgba(106,165,23,0.32)] transition-all">
        <div className='absolute inset-0 group-hover:backdrop-blur rounded-xl transition-all'></div>
        <ModifyEventButton event={event} />
        <DeleteEventButton event={event} />
        <div className="grid gap-4">
        <img src={`data:image/png;base64, ${event.image}`} className='w-full h-20 object-cover rounded-lg'/>
        <h3 className='text-xl font-medium ml-2 first-letter:capitalize'>{event.label}</h3>
        <span className='font-thin text-sm flex items-center'><AiOutlineInfoCircle size={35} className=' text-primary mx-4 bg-primary/10 rounded-lg p-2'/>{event.description}</span>
        <span className=' flex font-light text-sm items-center'><AiOutlineCalendar size={35} className=' text-primary mx-4 bg-primary/10 rounded-lg p-2'/> {event.date_debut} - {event.date_fin}</span>
        <span className='flex font-thin items-center'>
            {(event.lieu === null ) ? <BsCameraVideo size={35} className='text-primary mx-4 bg-primary/10 rounded-lg p-2'/> : <FaMapMarkerAlt size={35} className='text-primary mx-4 bg-primary/10 rounded-lg p-2'/> }
            {event.lieu ? event.lieu.ville  + " : " + event.lieu.localisation : "En ligne"}
        </span>
        <div className={clsx('grid grid-cols-2 gap-2 place-content-center text-center bg-secondary/30 py-2 rounded-lg', (!event.lien_replay && !event.lien_ressources) ? 'hidden':'block')}> <h4 className='col-span-2 font-semibold'>Liens ressources :</h4> <Link href={event.lien_replay} className='flex place-content-center'><MdOndemandVideo size={35} className='text-base-100 mx-4 bg-primary rounded-lg p-2 border border-primary'/></Link> <Link href={event.lien_ressources} className='flex place-content-center'><HiDocumentSearch size={35} className='text-base-100 mx-4 bg-primary rounded-lg p-2 border border-primary'/></Link></div>
        </div>
      </div>
  )
}

export default EventCard