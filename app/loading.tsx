import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../styles/loading.css";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className="grid w-full h-screen place-content-center place-items-center">
        <AiOutlineLoading3Quarters size={260} className='animate-spin text-primary' />
      </div>
    )
  }