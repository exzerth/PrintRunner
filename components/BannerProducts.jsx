import categories from "../utils/categories.json"

  function BannerProducts(props){
    const productTypeName = props.productTypeName

   return(   
      <div className="mt-5">
        <div className="w-full flex justify-between lg:justify-center px-[15px] flex-wrap">      
          {categories.banners.map((banner) => (
            <div key={banner.name} className="m-2 w-[180px] md:w-[348px] lg:w-[310px] min-h-max border">
              <img src={banner.image} alt={banner.name + 'Image'} />
              <h1 className="text-xl text-primary pt-4 font-semibold text-[15px] pl-[8px] pb-[8px] md:text-[22px] md:text-center">
                {productTypeName}
              </h1>
              <ul className="list-disc pl-[24px] pr-[12px] text-[15px] pb-[8px] text-gray20">
                {banner.details.map((detail, index) => (
                  <li className="mb-[5px]" key={index}>{detail}</li>
                ))}
              </ul>
              <div className="pr-[24px] pb-[24px] flex justify-end">
                <button className="hidden md:block min-w-[160px] rounded bg-[#FF9B00] text-white p-[15px] text-[18px] font-bold mt-[16px]">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div> 
      </div>
    )
  }

  export default BannerProducts