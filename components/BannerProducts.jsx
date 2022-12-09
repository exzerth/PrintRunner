import Image from "next/image"
import Link from "next/link"

  function BannerProducts(props){
    const productTypeName = props.productTypeName
    const productTypeImage = props.productTypeImage
    const productTypeDetails = props.productTypeDetails

   return(
    <div className="relative w-full mb-[20px] border inline-block min-h-[350px]">
      <Image src={productTypeImage} width={450} height={225} alt={productTypeName + 'Image'} />
      <h1 className="text-xl text-primary pt-4 font-semibold text-[15px] pl-[8px] pb-[8px] md:text-[22px] md:text-center">
        {productTypeName}
      </h1>
      <ul className="list-disc pl-[24px] pr-[12px] text-[15px] pb-[8px] text-gray20">
          {productTypeDetails}
      </ul>
      <div className="hidden md:flex pr-[24px] pb-[24px] justify-end">
          <Link href="/shopnow">
            <button className="hidden md:block min-w-[160px] rounded bg-[#FF9B00] text-white p-[15px] text-[18px] font-bold mt-[16px]">SHOP NOW</button>
        </Link>
      </div>
    </div>
    )
  }

  export default BannerProducts