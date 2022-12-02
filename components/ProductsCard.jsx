import Image from "next/image"
import holidayCard from "../images/holiday-card.jpeg"
import cardStyles from "../styles/FeaturedProducts.module.css"

const ProductsCard = () => {
  return (
    <>
        <div className={cardStyles.card}>
            <a href="#" className={cardStyles.link}>
                <div className="">
                    <div className="min-h-[144px] w-full">
                        <Image src={holidayCard} className="m-auto" />
                    </div>
                    <div className="font-semibold text-base text-center pb-[16px]">
                        Holiday Cards 
                    </div>
                </div>
            </a>
        </div>
    </>
  )
}

export default ProductsCard