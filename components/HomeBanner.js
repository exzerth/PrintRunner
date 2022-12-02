import Image from 'next/image'
import mobileBanner from '../images/mobile-home-banner.jpeg'
import '../styles/HomeBanner.module.css'

const HomeBanner = () => {
  return (
    <>
      <div className="w-full">
        <Image
          src={mobileBanner}
          className="object-cover w-full"
          alt=""
        />
        <div className="absolute inset-x-0 bottom-10 text-center">
            <h1 className='text-2xl text-[#0f4c8d] font-bold my-2.5'>Get Ready Before the Rush</h1>
            <a className='bg-[#ff9b00] text-white font-bold text-lg p-[15px] min-w-[160px] min-h-[48px] rounded inline-block' href="#shop">SHOP NOW</a>
        </div>
      </div>
    </>
  )
}

export default HomeBanner
