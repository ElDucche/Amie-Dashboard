import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../styles/loading.css";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className=" w-screen h-screen grid place-items-center place-content-center">
        <AiOutlineLoading3Quarters size={260} className='animate-spin text-primary' />
      </div>
    )
  }