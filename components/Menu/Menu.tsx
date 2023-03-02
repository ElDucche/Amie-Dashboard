import Link from 'next/link'
import { AiOutlineQuestionCircle, AiOutlineHome, AiOutlineCalendar, AiOutlineUser, AiOutlineHeatMap } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi'

function Menu() {
  return (
    <div className='w-28 md:w-48'>
      <ul className=" w-20 md:w-48 p-2 h-full min-h-screen gap-4 pt-6 font-semibold rounded-none fixed m-auto">
        <li className='rounded-lg my-2'>
          <Link href={'/'} className="m-auto md:m-0 group grid grid-cols-[3.5rem_1fr] items-center">
            <AiOutlineHome size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>Accueil</p>
          </Link>
        </li>
        <li className='rounded-lg my-2'>
          <Link href={'/events/'} className="m-auto md:m-0 grid grid-cols-[3.5rem_1fr] items-center group">
            <AiOutlineCalendar size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>Évènements</p> 
          </Link>
        </li>
        <li className='rounded-lg my-2'>
          <Link href={'/users/'} className="m-auto md:m-0 grid grid-cols-[3.5rem_1fr] items-center group ">
            <AiOutlineUser size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>Utilisateurs</p>
          </Link>
        </li>
        <li className='rounded-lg my-2'>
          <Link href={'/lieux/'} className="m-auto md:m-0 group grid grid-cols-[3.5rem_1fr] items-center">
            <FiMapPin size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>Lieux</p>
          </Link>
        </li>
        {/* <li className='rounded-lg my-2'>
          <Link href={'/faq/'} className="m-auto md:m-0 group grid grid-cols-[3.5rem_1fr] items-center">
            <AiOutlineQuestionCircle size={40} className='p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-base-100 transition-all'/>
            <p className='animate-leftappear hidden md:group-hover:block text-sm transition-all'>F.A.Q</p>
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Menu