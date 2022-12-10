import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
function Login() {
  const help = <FontAwesomeIcon icon={faCircleQuestion} />
  return (
    <div className="lg:w-1/2 mt-10 mx-5 border-b-2 pb-5">
      <h1 className="text-primary font-bold text-lg">Login</h1>
      <h3 className="text-primary font-bold text-sm">Returning Customer</h3>
      <form className="mt-10 mb-4 space-y-3">
        <label className="block text-[15px] text-gray20">
          Email <i className="text-red-500">*</i>
        </label>
        <input
          type="email"
          className="block w-full p-2 bg-none border rounded-[5px] focus:border-btncolor outline-none"
          name="email"
          required
        />

        <label className="block text-[15px] text-gray20">
          Password <i className="text-red-500 ">*</i>
        </label>
        <input
          type="password"
          name="pswd"
          required
          className="block w-full rounded-[5px] bg-none border p-2 focus:border-btncolor outline-none"
        />
        <button className="hover:bg-orange-500 bg-btncolor p-3 w-full text-white font-bold rounded-[5px]">
          LOGIN
        </button>
      </form>
      <a href="#" className="text-primary text-sm">
        {help} Forgot Password?
      </a>
    </div>
  )
}

export default Login
