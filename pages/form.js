import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Meta from '../components/Meta'

function form() {
  return (
    <>
      <Meta />
      <div className="container mx-auto mt-10 lg:flex lg:w-11/12">
        <Login />
        <Signup />
      </div>
    </>
  )
}

export default form
