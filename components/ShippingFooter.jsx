import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function ShippingFooter(props) {
    const rightArrow = <FontAwesomeIcon icon={faAngleRight}/>
    const firstIcon = props.firstIcon
    const firstHeader = props.firstHeader
    const firstDesc = props.firstDesc
    const firstLink = props.firstLink
    const secondIcon =props.secondIcon
    const secondHeader = props.secondHeader
    const secondDesc =props.secondDesc
    const secondLink =props.secondLink
  return (
    <div className="my-10 space-y-5 lg:space-y-0 mx-5 container mx-auto w-11/12 lg:mx-auto lg:flex justify-center">
    <div className="flex lg:w-1/2 ">
      <Image
        src={firstIcon}
        alt={firstHeader + " image"}
        width={70}
        height={70}
      />
      <div className="pl-5 w-9/12">
        <h1 className="font-semibold text-2xl">{firstHeader}</h1>
        <p>{firstDesc}</p>
        <Link href={firstLink} className="block mt-2 text-primary">
          Learn More {rightArrow}
        </Link>
      </div>
    </div>
    <div className="flex lg:w-1/2">
      <Image
        src={secondIcon}
        alt={secondHeader + " image"}
        width={70}
        height={70}
      />
      <div className="pl-5 w-9/12">
        <h1 className="font-semibold text-2xl">{secondHeader}</h1>
        <p>{secondDesc}</p>
        <Link href={secondLink} className="block mt-2 text-primary">
          Learn More {rightArrow}
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ShippingFooter