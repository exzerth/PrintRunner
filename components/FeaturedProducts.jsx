import ProductsCard from "./ProductsCard"

const FeaturedProducts = () => {
  return (
    <>
    <div className="container mx-auto px-[15px] md:px-[24px] mb-5 md:pb-[56px]">
        <div className="font-semibold text-center text-gray20 text-xl mb-6 md:text-[26px]">Featured Products</div>
        <div className="flex flex-wrap justify-center w-full">
            <div className="columns-2 md:columns-3 lg:columns-4 w-full">
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
                <ProductsCard/>
                <ProductsCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default FeaturedProducts