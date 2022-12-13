import React from 'react'

function DesignToolHead() {
  return (
    <div>
      <div className="bg-bgcolor h-fit ">
        <div className="absolute space-y-5 md:top-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12  lg:mt-0 lg:pt-5 lg:mx-10 lg:h-72 lg:w-3/6 lg:space-y-2 lg:top-auto lg:left-auto lg:transform-none xl:flex xl:flex-col xl:justify-center ">
          <h1 className="font-bold text-gray20  text-center lg:text-left lg:text-4xl text-3xl">
            Easy-to-Use Design Tool
          </h1>
          <p className="text-lg text-center lg:mx-0 lg:text-left">
            Create Your Own Prints In Just Minutes Design from scratch or choose
            from various free design templates, without leaving the website.
          </p>
        </div>
        <img
          className="w-full hidden lg:block"
          src="https://s1-ecp.printrunner.com/630/1025x242/design-tool-desktop.jpg"
        />

        <img
          className="lg:hidden h-1/2 "
          src="https://s1-ecp.printrunner.com/629/765x1017/design-tool-mobile.jpg"
        />
      </div>
    </div>
  )
}

export default DesignToolHead
