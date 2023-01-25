import Link from 'next/link';
import { EventForm } from '../../../components/Event/EventForm';

async function Event({params} : {params : {id : number}}) {
    const event = await fetch(`https://mockend.com/ElDucche/Amie-Dashboard/events/${params.id}`)
    .then(res => res.json()); 
    console.log(event);
  return (
    <div>
        <Link href={'/events/'} className="pb-6 text-primary hover:before:content-['<'] hover:before:mr-2 hover:before:p-1">Retour</Link>
        <EventForm event={event} />
    </div>
  )
}

export default Event