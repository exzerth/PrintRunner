import React from 'react'
import Meta from '../components/Meta'
import ShippingFooter from '../components/ShippingFooter'
import ShippingHead from '../components/ShippingHead'
import ShippingProduct from '../components/ShippingProduct'

function shipping({
  firstIcon,
  firstHeader,
  firstDesc,
  firstLink,
  secondIcon,
  secondHeader,
  secondDesc,
  secondLink,
}) {
  firstIcon = 'https://s1-ecp.printrunner.com/607/Design%20Online.svg'
  firstHeader = 'Design Tool'
  firstDesc =
    'Create print-ready projects from scratch. Access the image library through the online design tool'
  firstLink = '/designtool'
  secondIcon = 'https://s1-ecp.printrunner.com/611/Sample%20Kit.svg'
  secondHeader = 'Sample Kit'
  secondDesc =
    'See each product up close before creating your project. Includes popular products printed on different materials.'
  secondLink = '/samplekit'

  return (
    <div>
      <Meta />
      <div className="container mx-auto lg:w-4/5 my-20">
        <ShippingHead />
        <ShippingProduct />
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
    </div>
  )
}

export default shipping
