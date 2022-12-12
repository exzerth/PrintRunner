import React from 'react'
import Meta from '../components/Meta'
import ShippingHead from '../components/ShippingHead'
import ShippingProduct from '../components/ShippingProduct'

function shipping() {
  return (
    <div>
      <Meta />
      <div className="container mx-auto lg:w-4/5 my-20">
        <ShippingHead />
        <ShippingProduct />
      </div>
    </div>
  )
}

export default shipping
