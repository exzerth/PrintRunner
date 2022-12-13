import React from 'react'
import DesignToolBody from '../components/DesignToolBody'
import DesignToolHead from '../components/DesignToolHead'
import Meta from '../components/Meta'
import ShippingFooter from '../components/ShippingFooter'

function designtool({
  firstIcon,
  firstHeader,
  firstDesc,
  firstLink,
  secondIcon,
  secondHeader,
  secondDesc,
  secondLink,
}) {
  firstIcon = 'https://s1-ecp.printrunner.com/608/FREE%20Shipping.svg'
  firstHeader = 'FREE Shipping!'
  firstDesc = 'Shop effortlessly with free shipping on orders of $69 and up. '
  firstLink = '/designtool'
  secondIcon = 'https://s1-ecp.printrunner.com/611/Sample%20Kit.svg'
  secondHeader = 'Sample Kit'
  secondDesc =
    'See each product up close before creating your project. Includes popular products printed on different materials.'
  secondLink = '/samplekit'
  return (
    <div className="container mx-auto">
      <Meta />
      <DesignToolHead />
      <DesignToolBody />
      <ShippingFooter
        firstIcon={firstIcon}
        firstHeader={firstHeader}
        firstDesc={firstDesc}
        firstLink={firstLink}
        secondIcon={secondIcon}
        secondHeader={secondHeader}
        secondDesc={secondDesc}
        secondLink={secondLink}
      />
    </div>
  )
}

export default designtool
