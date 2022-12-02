import Image from "next/image"
import holidayCard from "../images/holiday-card.jpeg"

const FeaturedProducts = () => {
  return (
    <>
    <div className="font-semibold text-center text-xl mb-9">Featured Products</div>
    <div className="flex flex-wrap">
        <div className="columns-6">
            <a href="#" className="block bg-[#f5f9fc]">
                <Image src={holidayCard} />
            </a>
        </div>
    </div>
    </>
  )
}

export default FeaturedProducts