import React from 'react'

function ShippingHead() {
  return (
    <div>
      <div className="bg-bgcolor h-fit ">
        <div className="absolute space-y-5 md:top-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12  lg:mt-0 lg:pt-5 lg:mx-10 lg:h-72 lg:w-3/6 lg:space-y-2 lg:top-auto lg:left-auto lg:transform-none xl:flex xl:flex-col xl:justify-center ">
          <h1 className="font-bold text-gray20  text-center lg:text-left lg:text-4xl text-3xl">
            Free Shipping for any Items over $69
          </h1>
          <p className="text-lg text-center lg:mx-0 lg:text-left">
            Enjoy free ground shipping for any item worth $69 and above.
            Mainland US only. Additional charges may apply to Alaska, Hawaii,
            and Canada. Not applicable to freight shipping.
          </p>
        </div>
        <img
          className="w-full hidden lg:block"
          src="https://s1-ecp.printrunner.com/612/1025x242/free-shipping-banner-desktop.jpg"
        />

        <img
          className="lg:hidden h-1/2 "
          src="https://s1-ecp.printrunner.com/610/765x1017/free-shipping-banner-mobile-big.jpg"
        />
      </div>
      <div className="lg:flex lg:border-b-2 py-8 space-y-5 lg:space-y-0 ">
        <div className="text-center lg:w-1/2 px-10 space-y-3">
          <h1 className="font-bold">Easy Ordering Process</h1>
          <p>
            Start your project effortlessly. Our easy-to-use product calculator
            lets you see all the options in one page.
          </p>
        </div>
        <div className="text-center lg:w-1/2 px-10 space-y-3">
          <h1 className="font-bold">Hassle</h1>
          <p>
            Estimate shipping fees instantly. Input your zip code to see the
            shipping rates and delivery dates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShippingHead
