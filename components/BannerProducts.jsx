import categories from "../utils/categories.json"
  function BannerProducts(){
   return(   
    <div className="flex lg:w-[98.2vw] justify-center mt-5     ">
      <div className="lg:w-9/12 flex justify-center flex-wrap">      
      {categories.banners.map((banner) => (
        <div key={banner.name} className="m-2 w-40 min-h-max p-5 border">
          <img src={banner.image} alt={banner.name + 'Image'} />
          <h1 className="text-xl text-blue-500 pt-4 font-semibold">
            {banner.name}
          </h1>
          <ul className="mt-5 list-disc ">
            {banner.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}</div> 

    </div>)
  }
  export default BannerProducts