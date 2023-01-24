import Link from 'next/link'
import { AiOutlineQuestionCircle, AiOutlineHome, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';

function Menu() {
  return (
    <div className=''>
      <ul className="menu bg-secondary w-56 p-2 h-full min-h-screen gap-4 pt-6 font-semibold rounded-none">
        <li className='hover:bg-primary/20 rounded-lg'>
          <Link href={'/'}>
          <AiOutlineHome size='25'className='text-primary'/>
            Accueil
          </Link>
        </li>
        <li className='hover:bg-primary/20 rounded-lg'>
          <Link href={'/events/'}>
          <AiOutlineCalendar size='25'className='text-primary'/>
            Évènements
          </Link>
        </li>
        <li className='hover:bg-primary/20 rounded-lg'>
          <Link href={'/users/'}>
            <AiOutlineUser size='25'className='text-primary'/>
            Utilisateurs
          </Link>
        </li>
        <li className='hover:bg-primary/20 rounded-lg'>
          <Link href={'/faq/'}>
            <AiOutlineQuestionCircle size='25'className='text-primary'/>
            F.A.Q
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu