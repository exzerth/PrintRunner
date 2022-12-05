import Link from "next/link"
import categories from "../utils/categories.json"

  function BannerProducts(props){
    const productTypeName = props.productTypeName

   return(   
      <div className="container mt-5">
        <div className="w-full flex justify-center px-[15px] md:px-[24px] flex-wrap">
          <div className="columns-2 lg:columns-3 w-full">
          {categories.banners.map((banner) => (
            <div key={banner.name} className="w-full mb-[20px] border lg:inline-block min-h-[320px]">
              <img src={banner.image} alt={banner.name + 'Image'} />
              <h1 className="text-xl text-primary pt-4 font-semibold text-[15px] pl-[8px] pb-[8px] md:text-[22px] md:text-center">
                {productTypeName}
              </h1>
              <ul className="list-disc pl-[24px] pr-[12px] text-[15px] pb-[8px] text-gray20">
                {banner.details.map((detail, index) => (
                  <li className="mb-[5px]" key={index}>{detail}</li>
                ))}
              </ul>
              <div className="hidden md:flex pr-[24px] pb-[24px] justify-end">
                <button className="hidden md:block min-w-[160px] rounded bg-[#FF9B00] text-white p-[15px] text-[18px] font-bold mt-[16px]">SHOP NOW</button>
              </div>
            </div>
          ))}
          </div>
        </div> 
      </div>
    )
  }

  export default BannerProducts