import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function BannerHead(props){
  const bgImage = props.bgImage
  const categoryTitle = props.categoryTitle
  const categoryDescriptionOne = props.categoryDescriptionOne
  const categoryDescriptionTwo = props.categoryDescriptionTwo
  const categoryDescriptionThree = props.categoryDescriptionThree
    
   const check =  <FontAwesomeIcon icon={faCheck}/>
    return(
    <div className='mt-10 w-full text-gray20 md:px-[24px] md:relative'>
      <Image src={bgImage} className="hidden md:block md:object-fit md:h-[200px]" alt="Main_Banner"/>

      <div className='bg-bgcolor md:bg-transparent md:absolute top-0 h-[120px] pl-[5px]'>
          <div className="py-5">
            <h1 className="text-2xl font-bold text-slate-800 p-[10px] ">{categoryTitle}</h1>
            <ul>
            <li className="text-[14px] md:text-[16px] md:mb-[4px]">
              <i className="text-blue-500 p-2">{check}</i> {categoryDescriptionOne}
            </li>
            <li className='hidden md:block md:mb-[4px]'>
              <i className="text-blue-500 p-2">{check}</i> {categoryDescriptionTwo}
            </li>
            <li  className='hidden md:block md:mb-[4px]'>
              <i className="text-blue-500 p-2">{check}</i> {categoryDescriptionThree}
            </li>
            </ul>
          </div>
      </div>
    </div>
    )

}
export default BannerHead;