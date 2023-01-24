import Link from 'next/link';
import React from 'react'
import Title from '../../../components/layout/Title'

async function Event({params} : {params : {id : number}}) {
    const event = await fetch(`https://mockend.com/ElDucche/Amie-Dashboard/events/${params.id}`)
    .then(res => res.json()); 
  return (
    <div>
        <Link href={'/events/'} className="mb-6 text-primary hover:before:content-['<'] hover:before:mr-2 hover:before:p-1">Retour</Link>
        <Title>{event.title}</Title>
        <div className='mt-4'>
            <img src={event.cover} className="w-64 ovject-cover rounded-xl" />
            <p>{event.category}</p>
            <p>{event.date}</p>
            <p>{event.place}</p>
            <p>{event.entrant}</p>
            <p>{event.body}</p>
        </div>
    </div>
  )
}

export default Event