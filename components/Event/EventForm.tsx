'use client'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import Tag from '../../components/Tag';
import { Evenment } from '../../typing';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi'


export const EventForm = ({event}: {event: Evenment}) => {
  return (
    <form className='grid gap-2 md:ml-6 p-2 border border-neutral/20 rounded-xl'>
        <img src={event.cover} className="w-72 h-32 rounded-xl object-cover" />
        <input 
            className='input input-bordered text-xl font-medium ml-2 my-2 first-letter:capitalize' 
            defaultValue={event.title}

        />
        <label className=''>
        <div className="form-control flex items-center">
            <div className="input-group">
                <select className="select select-bordered" id='selector'>
                    <option disabled selected value={"Security"}><Tag type={event.category}/></option>
                    <option value={"Security"}><Tag type="Security"/></option>
                    <option value={"Game"}><Tag type="Game" /></option>
                    <option value={"Analysis"}><Tag type="Analysis" /></option>
                    <option value={"Data"}><Tag type="Data" /></option>
                </select>
            </div>
            <Tag type={event.category} />
        </div>
        </label>
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
        
        {/* <button className='btn btn-primary' type='submit'>Modifier</button> */}
    </form>
  )
}
