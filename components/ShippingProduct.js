import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shipping from '../utils/shipping.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function ShippingProduct() {
  const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
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
      <div className="mt-5 space-y-5 lg:space-y-0 mx-5 lg:mx-auto lg:flex justify-center">
        <div className="flex lg:w-1/2 ">
          <Image
            src="https://s1-ecp.printrunner.com/607/Design%20Online.svg"
            alt="designImage"
            width={70}
            height={70}
          />
          <div className="pl-5 w-9/12">
            <h1 className="font-semibold text-2xl">Design Tool</h1>
            <p>
              Create print-ready projects from scratch. Access the image library
              through the online design tool
            </p>
            <Link href="/design" className="block mt-2 text-primary">
              Learn More {rightArrow}
            </Link>
          </div>
        </div>
        <div className="flex lg:w-1/2">
          <Image
            src="https://s1-ecp.printrunner.com/611/Sample%20Kit.svg"
            alt="sampleImage"
            width={70}
            height={70}
          />
          <div className="pl-5 w-9/12">
            <h1 className="font-semibold text-2xl">Sample Kit</h1>
            <p>
              See each product up close before creating your project. Includes
              popular products printed on different materials.
            </p>
            <Link href="/samplekit" className="block mt-2 text-primary">
              Learn More {rightArrow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingProduct
