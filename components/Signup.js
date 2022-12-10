import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

function Signup() {
  const help = <FontAwesomeIcon icon={faCircleQuestion} />

  return (
    <div className="lg:w-1/2 mt-5 mx-5 border-b-2 pb-2">
      <h1 className="text-primary font-bold text-lg">Registration</h1>
      <h3 className="text-primary font-bold text-sm">New Customers</h3>
      <form className="mt-10 mb-4 space-y-3">
        <label className="block text-[15px] text-gray20">
          First Name <i className="text-red-500">*</i>
        </label>
        <input
          type="text"
          className="block w-full p-2 bg-none border rounded-[5px] focus:border-btncolor outline-none"
          name="fname"
        />
        <label className="block text-[15px] text-gray20">
          Last Name <i className="text-red-500">*</i>
        </label>
        <input
          type="text"
          className="block w-full p-2 bg-none border rounded-[5px] focus:border-btncolor outline-none"
          name="lname"
          required
        />
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
          Phone <i className="text-red-500">*</i>
        </label>
        <input
          type="tel"
          className="block w-full p-2 bg-none border rounded-[5px] focus:border-btncolor outline-none"
          name="phone"
          required
        />
        <label className="block text-[15px] text-gray20">
          Password <i className="text-red-500 ">*</i>
        </label>
        <input
          type="password"
          name="pswd"
          className="block w-full rounded-[5px] bg-none border p-2 focus:border-btncolor outline-none"
          required
        />
        <button className="bg-btncolor hover:bg-orange-500 p-3 w-full text-white font-bold rounded-[5px]">
          CREATE ACCOUNT
        </button>
      </form>
      <p className="text-sm">
        By clicking <q>Create Account</q> you are agreeing to {"PrintRunner's "}
        <a className="text-primary hover:cursor-pointer">Terms & Conditions </a>
        and <a className="text-primary hover:cursor-pointer">Privacy Policy</a>.
        PrintRunner.com may send you email, discounts and other offers.
      </p>
    </div>
  )
}

export default Signup
