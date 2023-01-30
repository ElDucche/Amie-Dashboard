import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { Evenment } from '../typing';
import { ModifyEventButton } from './layout/ModifyEventButton';

function EventCard({event} : {event: Evenment;}) {
  return (
    <div className="group relative bg-base-100 w-64 h-56 rounded-xl border border-neutral/10 drop-shadow-md p-2">
      <div className='absolute inset-0 group-hover:backdrop-blur rounded-xl'></div>
      <ModifyEventButton event={event} />
      <img src={event.cover} className='w-full h-20 object-cover rounded-lg'/>
      <h3 className='text-xl font-medium ml-2 my-2 first-letter:capitalize'>{event.title}</h3>
      <span className=' flex my-1 font-light'><AiOutlineCalendar className=' text-rose-800 mx-4'/> {event.createdAt}</span>
      <span className='flex my-1 font-thin'>
          {(event.place === "En ligne") ? <BsCameraVideo className='text-rose-800 mx-4'/> : <FaMapMarkerAlt className='text-rose-800 mx-4'/> }
          {event.place}
      </span>
      <span className='flex items-center my-1 font-thin'><FaUsers className='text-rose-800 mx-4'/> {(event.entrant <= 1) ? `${event.entrant} participant` : `${event.entrant} participants` } </span>
      
    </div>
  )
}

export default EventCard