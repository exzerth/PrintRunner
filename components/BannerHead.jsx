import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MainBanner from "../images/MainBanner.jpg"
function BannerHead(){
    
   const check =  <FontAwesomeIcon icon={faCheck}/>
    return(
    <div className='flex justify-center mt-10 w-[98.2vw]'>
        <div className='flex bg-bgcolor md:w-9/12 min-h-max'>
        <div className="md:pt-10 md:pb-10 md:w-fit pt-5 pb-5  ">
        <h1 className="text-2xl font-bold text-slate-800 p-2 ">Banner Printing</h1>
        <ul>
        <li>
          <i className="text-blue-500 p-2">{check}</i> Banner printing services
          to promote your brand
        </li>
        <li className='hidden md:block'>
          <i className="text-blue-500 p-2">{check}</i> Banner printing services
          to promote your brand
        </li>
        <li  className='hidden md:block'>
          <i className="text-blue-500 p-2">{check}</i> Banner printing services
          to promote your brand
        </li>
        </ul>
        </div>
        <div className='hidden md:flex w-fit'> 
          <Image src={MainBanner} className="w-fit" alt="Main_Banner"/>
      </div> 
  </div>
    </div>
    )

}
export default BannerHead;