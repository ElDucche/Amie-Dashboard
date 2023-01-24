import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';

function EventCard({img, name, date, place, peoples} : {img: string; name: string; date: string; place: string; peoples: number;}) {
  return (
    <div className="bg-base-100 w-64 h-56 rounded-xl border border-neutral/10 drop-shadow-lg p-2">
        <img src={img} className='w-full h-20 object-cover rounded-lg'/>
        <h3 className='text-lg font-semibold ml-2 my-2'>{name}</h3>
        <span className='w-full flex justify-between my-1 font-light'><AiOutlineCalendar className=' text-rose-800'/> {date}</span>
        <span className='w-full flex justify-between my-1 font-thin'>
            {(place === "En ligne") ? <BsCameraVideo className='text-rose-800'/> : <FaMapMarkerAlt className='text-rose-800'/> }
            {place}
        </span>
        <span className='w-full flex justify-between my-1 font-thin'><FaUsers className='text-rose-800'/> {(peoples <= 1) ? `${peoples} participant` : `${peoples} participants` } </span>
    </div>
  )
}

export default EventCard