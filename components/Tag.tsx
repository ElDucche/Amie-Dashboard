import { RiGamepadLine } from 'react-icons/ri'
import { BiCheckShield} from 'react-icons/bi'
import { VscGraph } from 'react-icons/vsc'
import { AiOutlinePieChart } from 'react-icons/ai'
import { MdOutlineDoNotDisturbAlt } from 'react-icons/md'


function getTag(tag: string) : any {
    switch(tag) {
        case "Game" :
            return <label className='tag bg-orange-500'>
                        <RiGamepadLine className='text-base-100'/>
                        <span>Game</span>
                </label>;
            break
        case "Security" :
            return <label className='tag bg-rose-500'>
                <BiCheckShield className='text-base-100'/>
                <span>Security</span>
            </label>;
            break
        case "Data" :
            return <label className='tag bg-yellow-500'>
                <VscGraph className='text-base-100'/>
                 <span>Data</span>
            </label>;
            break
        case "Analysis" :
            return <label className='tag bg-green-500'>
                <AiOutlinePieChart className='text-base-100'/>
                 <span>Analysis</span>
            </label>;
            break
        default :
            return <label className='tag bg-stone-500'>
                <MdOutlineDoNotDisturbAlt className='text-base-100'/>
                <span>Untagged</span>
            </label>;
            break
    }
}

function Tag({type} : {type: string}) {
    const tag = getTag(type);
  return (
    <div>
        {tag}
    </div>
  )
}

export default Tag