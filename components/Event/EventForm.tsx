'use client'
import { useQuery } from '@tanstack/react-query'  
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { Evenment, Lieu} from '../../typing';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi'
import { useRouter } from 'next/navigation';
import { VscInfo } from 'react-icons/vsc';
import { BsClipboardCheck } from 'react-icons/bs';
import { HiDocumentSearch } from 'react-icons/hi';
import { MdOndemandVideo } from 'react-icons/md';



export const EventForm = ({event}: {event: Evenment}) => {
    const router = useRouter()
    const lieux = useQuery({
        queryKey: ['lieuData'],
        queryFn: () =>
          fetch('http://amie.labinno-mtech.fr/api/lieu/getalllieux').then(
            (res) => res.json(),
          ),
      })
      const users = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://amie.labinno-mtech.fr/api/utilisateur/getallutilisateurs').then((res) => res.json()),
      })
    const modifyEvent = async (e: any) => {
        const formData = new FormData(e.currentTarget);
        const entries = Object.fromEntries(formData.entries());
        const lieu = lieux.data.filter((lieu: Lieu) => lieu.idLieu == Number(entries.lieux))
        // console.log(lieu)
        
        const body = {
            "date_debut": entries.date_debut,
            "date_fin": entries.date_fin,
            "description": entries.description,
            "heure_debut": entries.heure_debut,
            "heure_fin": entries.heure_fin,
            "image": "",
            "label": entries.label,
            "lien_replay": entries.replay,
            "lien_ressources": entries.ressources,
            "lieu": lieu[0],
            "statut": entries.statut
        }
        // console.log(entries);
        // console.log(JSON.stringify(body))
        fetch(`http://amie.labinno-mtech.fr/api/evenement/${event.utilisateur.idUtilisateur}/${event.idEvenement}`, {
            headers: {
                'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(body)
            }
        );
        
        router.refresh()
    }
    
  return (
    <form className='grid gap-2 p-2 rounded-xl m-auto' onSubmit={modifyEvent}>
            {/* l'image de l'event */}
            <label>
                <img src={`data:image/png;base64, ${event.image}`} alt="Image de l'évènement" className='w-full h-20 flex items-center justify-center border rounded-lg'/>
                <input type="file" name="photo" id="photo" className="file-input file-input-bordered file-input-lg w-full"/>
            </label>
            {/* Le titre de l'event */}
            <input 
                className='input input-bordered text-xl font-medium my-2 first-letter:capitalize' 
                name='label'
                placeholder="Titre"
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
                <VscInfo size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='description'
                    type="text-area"
                    defaultValue={event.description}
                />
            </label>
            <label className='flex items-center'>
                <AiOutlineCalendar size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <div>
                    <input type="date" name="date_debut" defaultValue={event.date_debut} className="input input-bordered"/>
                    <input type="date" name="date_fin" defaultValue={event.date_fin} className="input input-bordered"/>
                </div>
                
            </label>
            <label className='flex items-center'>
                <AiOutlineClockCircle size={"55"} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <div>
                    <input type="time" name="heure_debut" defaultValue={event.heure_debut} className="input input-bordered"/>
                    <input type="time" name="heure_fin" defaultValue={event.heure_fin} className="input input-bordered"/>
                </div>
                
            </label>
            <label className='flex items-center'>
                <FaMapMarkerAlt size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <select name="lieux" id="lieux" className="input input-bordered w-full outline-none" defaultValue={event.lieu?.idLieu}>
                    {lieux.data?.map((lieu: Lieu) => 
                           <option value={lieu.idLieu} key={lieu.idLieu}>{lieu.ville} : {lieu.localisation}</option>
                    )}
                </select>
            </label>
            <label className='flex items-center'>
                <GiTeacher size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='organizer'
                />
            </label>
            <label className='flex items-center'>
                <BsClipboardCheck size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <select name="statut" id="statut" className="input input-bordered w-full outline-none" defaultValue={event.statut}>
                    <option value="Waiting">En attente</option>
                    <option value="Validated">Validé</option>
                    <option value="Failed">Refusé</option>
                </select>
            </label>
            <label className='flex items-center'>
                <MdOndemandVideo size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='replay'
                    placeholder="Lien du replay"
                />
            </label>
            <label className='flex items-center'>
                <HiDocumentSearch size={'55'} className='bg-secondary p-4 text-primary rounded-xl mr-2'/>
                <input
                    className='input input-bordered w-full'
                    name='ressources'
                    placeholder="Lien des ressources"
                />
            </label>
            <button className='btn btn-primary text-base-100' type='submit'>Modifier</button>
        </form>
  )
}
