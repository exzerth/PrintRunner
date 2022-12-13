import Image from 'next/image'
import React from 'react'

function DesignToolBody() {
  return (
    <div>
      <div className="lg:flex my-10 container mx-auto w-11/12 lg:w-full lg:space-x-20">
        <img
          src="https://s1-ecp.printrunner.com/631/800x748/business-card.png"
          alt="Design Image"
          className="lg:w-1/2 "
        />
        <div className="lg:w-1/2 mt-5 ">
          <h1 className="text-3xl text-center lg:text-left font-semibold text-gray20">
            FREE and Easy to Use
          </h1>
          <p className="text-center lg:text-left mt-5">
            Create unlimited projects at no cost. Upload your artwork or create
            one from scratch.
          </p>
          <ul className="mt-10 space-y-10">
            <li className="flex space-x-5">
              <img src="https://s1-ecp.printrunner.com/640/drag-and-drop.svg" />
              <div>
                <h3 className="font-bold text-gray20">Drag and Drop</h3>
                <p className="text-gray20">
                  Enjoy the freedom of moving your design exactly where you want
                  it.
                </p>
              </div>
            </li>
            <li className="flex space-x-5">
              <img src="https://s1-ecp.printrunner.com/639/design.svg" />
              <div>
                <h3 className="font-bold text-gray20">Designed for Everyone</h3>
                <p className="text-gray20">
                  Turn your vision into a print-ready artwork in just a few
                  steps.
                </p>
              </div>
            </li>
            <li className="flex space-x-5">
              <img src="https://s1-ecp.printrunner.com/641/solution.svg" />
              <div>
                <h3 className="font-bold text-gray20">
                  Straightfoward Solution
                </h3>
                <p className="text-gray20">
                  Clutter-free workspace lets you focus on your work. Access the
                  media library with one click.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-10 container mx-auto w-11/12">
        <h1 className="text-3xl text-center font-semibold text-gray20">
          Customizable Templates in Various Formats
        </h1>
        <p className=" lg:text-center text-left mt-2">
          Browse professionally designed templates for marketing materials and
          other creative visuals.
        </p>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4">
          <div className="bg-bgcolor m-2 ">
            <img
              className="self-center "
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/112171/CarbonlessFormsLoanSmallBusinessB_450x450.jpg"
              alt="Carbonless Forms Image"
            />
            <h1 className=" text-primary p-5 text-center text-2xl font-semibold">
              Carbonless Forms
            </h1>
            {/* <div className="flex flex-col justify-center border-2 border-red-600 absolute h-fit">
              <button className="bg-btncolor py-3 px-20 font-bold text-white">
                SHOP NOW
              </button>
            </div> */}
          </div>
          <div className="bg-bgcolor m-2 ">
            <img
              className="self-center "
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/112171/CarbonlessFormsLoanSmallBusinessB_450x450.jpg"
              alt="Carbonless Forms Image"
            />
            <h1 className=" text-primary p-5 text-center text-2xl font-semibold">
              Letterheads
            </h1>
            {/* <div className="flex flex-col justify-center border-2 border-red-600 absolute h-fit">
              <button className="bg-btncolor py-3 px-20 font-bold text-white">
                SHOP NOW
              </button>
            </div> */}
          </div>
          <div className="bg-bgcolor m-2 ">
            <img
              className="self-center "
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/112171/CarbonlessFormsLoanSmallBusinessB_450x450.jpg"
              alt="Carbonless Forms Image"
            />
            <h1 className=" text-primary p-5 text-center text-2xl font-semibold">
              Standard Business Cards
            </h1>
            {/* <div className="flex flex-col justify-center border-2 border-red-600 absolute h-fit">
              <button className="bg-btncolor py-3 px-20 font-bold text-white">
                SHOP NOW
              </button>
            </div> */}
          </div>
          <div className="bg-bgcolor m-2 ">
            <img
              className="self-center "
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/112171/CarbonlessFormsLoanSmallBusinessB_450x450.jpg"
              alt="Carbonless Forms Image"
            />
            <h1 className=" text-primary p-5 text-center text-2xl font-semibold">
              Mini Business Cards
            </h1>
            {/* <div className="flex flex-col justify-center border-2 border-red-600 absolute h-fit">
              <button className="bg-btncolor py-3 px-20 font-bold text-white">
                SHOP NOW
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignToolBody
