import Link from 'next/link'
import { AiOutlineQuestionCircle, AiOutlineHome, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';

function Menu() {
  return (
    <div className='w-28 md:w-48'>
      <ul className="menu bg-secondary w-20 md:w-48 p-2 h-full min-h-screen gap-4 pt-6 font-semibold rounded-none fixed m-auto">
        <li className='rounded-lg'>
          <Link href={'/'} className="m-auto md:m-0">
            <AiOutlineHome size='25'className='text-primary'/>
            <p className='hidden md:block'>Accueil</p>
          </Link>
        </li>
        <li className='rounded-lg'>
          <Link href={'/events/'} className="m-auto md:m-0">
            <AiOutlineCalendar size='25'className='text-primary'/>
            <p className='hidden md:block'>Évènements</p> 
          </Link>
        </li>
        <li className='rounded-lg'>
          <Link href={'/users/'} className="m-auto md:m-0">
            <AiOutlineUser size='25'className='text-primary'/>
            <p className='hidden md:block'>Utilisateurs</p>
          </Link>
        </li>
        <li className='rounded-lg'>
          <Link href={'/faq/'} className="m-auto md:m-0">
            <AiOutlineQuestionCircle size='25'className='text-primary'/>
            <p className='hidden md:block'>F.A.Q</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu