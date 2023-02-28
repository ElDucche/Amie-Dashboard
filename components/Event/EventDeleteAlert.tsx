import { useRouter } from 'next/navigation'
import React from 'react'
import { Evenment } from '../../typing'

export const EventDeleteAlert = ({event} : {event: Evenment}) => {
  const router = useRouter()
  const deleteEvent = async (e: any) => {
    const atId = Object.fromEntries(new FormData(e.currentTarget).entries()).event
    await fetch(`http://amie.labinno-mtech.fr/api/evenement/deleteevenement/${atId}`, {
      method: 'DELETE',
    })
    router.refresh();
  }
  return (
    <form className='w-92' onSubmit={deleteEvent}>
      <input type="text" value={event.idEvenement} name='event' className='hidden'/>
      <label>
        <h3 className='p-4 mb-2 text-xl'>Etes-vous sûr de vouloir supprimer cet évènement ?</h3>
      </label>
      <div className="grid grid-cols-2 gap-2">
        <button className='btn btn-error ' type='submit'>Supprimer</button>
        <button className='btn btn-primary text-base-100' onClick={(e) => e.stopPropagation()}>Annuler</button>
      </div>
    </form>
  )
}