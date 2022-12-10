import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Meta from '../components/Meta'

function form() {
  return (
    <>
      <Meta />
      <div className="container mx-auto lg:flex lg:w-4/5">
        <Login />
        <Signup />
      </div>
    </>
  )
}

export default form
