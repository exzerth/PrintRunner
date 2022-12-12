import ProductsCard from "./ProductsCard"

const FeaturedProducts = () => {
  return (
    <>
    <div className="container mx-auto px-[15px] md:px-[24px] mb-10 md:pb-[56px]">
        <div className="font-semibold text-center text-gray20 text-xl mb-7 md:text-[26px]">Featured Products</div>
        <div className="flex flex-wrap justify-center w-full">
            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
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