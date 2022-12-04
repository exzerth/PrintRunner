import Image from 'next/image'
import mobileBanner from '../images/mobile-home-banner.jpeg'
import desktopBanner from '../images/desktop-banner.jpeg'
import '../styles/HomeBanner.module.css'

const HomeBanner = () => {
  return (
    <>
      <div className="w-full md:px-[24px] mt-[16px]">
        <Image
          src={mobileBanner}
          className="object-cover w-full md:hidden"
          alt=""
        />

        <Image
          src={desktopBanner}
          className="hidden md:block h-[256px]"
          alt=""
        />

        <div className="absolute inset-x-0 bottom-10 text-center md:text-start md:top-[65px] md:pl-[74px]">
          <h1 className="text-2xl text-[#0f4c8d] font-bold my-2.5">
            Get Ready Before the Rush
          </h1>
          <a
            className="bg-[#ff9b00] text-white font-bold text-lg p-[15px] md:py-[12px] min-w-[160px] min-h-[48px] rounded inline-block md:text-center"
            href="#shop"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </>
  )
}

export default HomeBanner
