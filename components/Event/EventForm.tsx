'use client'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import Tag from '../../components/Tag';
import { Evenment } from '../../typing';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';


export const EventForm = ({event}: {event: Evenment}) => {
  return (
    <form className='grid gap-2 md:ml-6'>
        <img src={event.cover} className=" w-72 h-52 object-cover rounded-xl" />
        <input 
            className='input text-xl font-medium ml-2 my-2 first-letter:capitalize' 
            defaultValue={event.title}

        />
        <Tag type={event.category} />
        <label className='flex items-center'>
            <AiOutlineCalendar size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            <input 
                className='input input-bordered w-full'
                defaultValue={event.createdAt}
            />
        </label>
        <label className='flex items-center'>
            <FaMapMarkerAlt size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
            <input
                className='input input-bordered w-full' 
                defaultValue={event.place}
            />
        </label>
        <label className='flex items-center'>
            <FaUsers size={'55'} className='bg-secondary p-4 text-primary rounded-xl'/>
            <p>{event.entrant} participants</p>
        </label>
        {/* <button className='btn btn-primary' type='submit'>Modifier</button> */}
    </form>
  )
}
