import React from 'react'
import shipping from '../utils/shipping.json'
function ShippingProduct() {
  return (
    <div>
      <h1 className="my-10 font-semibold text-2xl text-center">
        Get Started on your Printing Needs
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full border-b-2 mx-auto lg:w-11/12 pb-5">
        {shipping.map((item, index) => (
          <div key={index} className="bg-bgcolor m-5">
            <img className="self-center" src={item.image} alt={item.name} />
            <h1 className=" text-primary p-5 text-center text-2xl font-semibold">
              {item.name}
            </h1>
            {/* <div className="flex flex-col justify-center border-2 border-red-600 absolute h-fit">
              <button className="bg-btncolor py-3 px-20 font-bold text-white">
                SHOP NOW
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShippingProduct
