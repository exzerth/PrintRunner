import cardStyles from "../styles/FeaturedProducts.module.css"
import ProductsCard from "./ProductsCard"

const FeaturedProducts = () => {
  return (
    <>
    <div className="container px-[15px]">
        <div className="font-semibold text-center text-xl mb-9">Featured Products</div>
        <div className="flex flex-wrap justify-center w-full">
            <div className="columns-2 w-full">
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default FeaturedProducts