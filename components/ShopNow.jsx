import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
function ShopNow() {
  const widthContainer = useRef(null)
  const heightContainer = useRef(null)
  const quantityContainer = useRef(null)
  const sidesContainer = useRef(null)
  const materialContainer = useRef(null)
  const finishingContainer = useRef(null)
  const readyToShipContainer = useRef(null)
  const [price, SetPrice] = useState(null)
  const[btnValue , SetBtnValue] = useState("CONTINUE")
  const star = <FontAwesomeIcon icon={faStar} />
  const check = <FontAwesomeIcon className="text-primary" icon={faCheck} />
  function MainCalc() {
    var width = parseInt(widthContainer.current.value)
    var height = parseInt(heightContainer.current.value)
    var quantity = parseInt(quantityContainer.current.value)
    var material = parseInt(materialContainer.current.value)
    var sides = parseInt(sidesContainer.current.value)
    var readyToShip = parseInt(readyToShipContainer.current.value)
    var finishing = parseInt(finishingContainer.current.value)
    SetPrice(
      quantity * (width + height + material + sides + readyToShip + finishing)
    )
  }
  //Shorten code when i feel like thinking mood => lazy , tired :(
  function UploadAction() {
    SetBtnValue("CONTINUE")
  }
  function DesignAction() {
    SetBtnValue("START DESIGNING")
  }
  function BuyAction() {
    SetBtnValue("ADD TO CART")
  }
  useEffect(() => {
    MainCalc()
  })
  return (
    <div className="  lg:flex justify-center ">
      <div className="p-5 lg:w-1/2">
        <div className="pb-10">
          {/* Item Name  */}
          <h1 className="text-3xl font-bold text-gray20">Vinyl Banners</h1>
          <p className="text-2xl mt-2 text-yellow-500">
            {star}
            {star}
            {star}
            {star}
            {star}
            <i className="text-xl text-blue-500">87 Reviews</i>
          </p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/RestaurantBannersMarketingMaterialsB_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/01_VinylBanner-Main_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/02_vinylbanner-application_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/03_VinylBanner-Application_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04a_VinylBanner-Material_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04b_VinylBanner-Material_450x450.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04c_VinylBanner-Sizes_450x450.jpg"
            />
          </SwiperSlide>
          <h1 className="mt-5 opacity-0">...</h1>
        </Swiper>
        <p className="text-center mt-8 m-5">
          Be seen from any angle with attention-grabbing waterproof banners
        </p>
        <ul>
          <li>{check} Custom sizes up to 20 ft x 8 ft</li>
          <li>{check} Fade, wind, and tear-resistant matte vinyl</li>
          <li>{check} Optional grommets or pole pockets </li>
        </ul>
        <h1 className="font-bold text-gray20 p-5 text-center lg:text-left text-[17px]">
          Product Features
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/439/Great%20Quality.png"
            />
            <p className="text-[#999999] text-center">Great Quality</p>
          </div>
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/441/42x42/Fade%20Resistant.png"
            />
            <p className="text-[#999999] text-center">Fade Resistant</p>
          </div>
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/452/42x42/Water%20Proof.png"
            />
            <p className="text-[#999999] text-center">Waterproof</p>
          </div>
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/440/41x43/Best%20Prices.png"
            />
            <p className="text-[#999999] text-center">Best Prices</p>
          </div>
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/460/42x42/Custom%20Size.png"
            />
            <p className="text-[#999999] text-center">Custom Size</p>
          </div>
          <div className="w-fit m-2 ">
            <img
              className="m-auto"
              src="https://s1-ecp.printrunner.com/438/Turnaround.png"
            />
            <p className="text-[#999999] text-center">Fast Turnaround</p>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div>
        <div className="border mt-10 pb-10">
          <ul className="space-y-4">
            <h1 className="text-bold bg-bgcolor p-2 md:p-8 text-2xl">
              Get Started
              <b className="hidden md:block float-right pl-5 pr-5">
                &#36; {price}
              </b>
            </h1>

            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Flat Width In feet</b>
              <select
                className="mr-5 bg-white outline-none"
                onChange={MainCalc}
                ref={widthContainer}
              >
                <option value="10">1 ft.</option>
                <option value="20">2 ft.</option>
                <option value="30">3 ft.</option>
                <option value="40">4 ft.</option>
                <option value="50">5 ft.</option>
                <option value="60">6 ft.</option>
                <option value="70">7 ft.</option>
                <option value="80">8 ft.</option>
                <option value="90">9 ft.</option>
                <option value="100">10 ft.</option>
                <option value="110">11 ft.</option>
                <option value="120">12 ft.</option>
              </select>
            </li>
            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Flat Height In feet</b>
              <select
                className="mr-5 bg-white outline-none"
                onChange={MainCalc}
                ref={heightContainer}
              >
                <option value="10">1 ft.</option>
                <option value="20">2 ft.</option>
                <option value="30">3 ft.</option>
                <option value="40">4 ft.</option>
                <option value="50">5 ft.</option>
                <option value="60">6 ft.</option>
                <option value="70">7 ft.</option>
                <option value="80">8 ft.</option>
                <option value="90">9 ft.</option>
                <option value="100">10 ft.</option>
                <option value="110">11 ft.</option>
                <option value="120">12 ft.</option>
              </select>
            </li>
            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Number of Sides</b>
              <select
                className="mr-5 bg-white outline-none"
                ref={sidesContainer}
                onChange={MainCalc}
              >
                <option value="20">Single Sided</option>
                <option value="40">Double Sided</option>
              </select>
            </li>

            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Quantity</b>
              <select
                className="mr-5 bg-white outline-none "
                ref={quantityContainer}
                onChange={MainCalc}
              >
                <option value="1">1 ft.</option>
                <option value="2">2 ft.</option>
                <option value="3">3 ft.</option>
                <option value="4">4 ft.</option>
                <option value="5">5 ft.</option>
                <option value="6">6 ft.</option>
                <option value="7">7 ft.</option>
                <option value="8">8 ft.</option>
                <option value="9">9 ft.</option>
                <option value="10">10 ft.</option>
                <option value="11">11 ft.</option>
                <option value="12">12 ft.</option>
              </select>
            </li>

            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Finishing</b>
              <select
                className="mr-5 bg-white outline-none "
                ref={finishingContainer}
                onChange={MainCalc}
              >
                <option value="100">Pole Pockets (Top+Bottom)</option>
                <option value="25">Grommets Only</option>
                <option value="0">None</option>
                <option value="50">Hem and Grommets</option>
                <option value="150">Pole Pockets (Right+Left)</option>
              </select>
            </li>

            <li className="border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Material</b>
              <select
                className="mr-5 bg-white outline-none "
                ref={materialContainer}
                onInput={MainCalc}
              >
                <option value="100">Standard 13 oz. Vinyl </option>
                <option value="200">18 oz. Matte Vinyl </option>
              </select>
            </li>

            <li className="md:border-b-2 flex flex-wrap w-full justify-between">
              <b className="pl-4">Ready to Ship In</b>
              <select
                className="mr-5 bg-white outline-none "
                ref={readyToShipContainer}
                onInput={MainCalc}
              >
                <option value="5">2 Business Days</option>
                <option value="10">3 Business Days</option>
              </select>
            </li>

            <li className="hidden lg:block">
              <b className="pl-4">How do you want to continue ?</b>
              <div className="flex flex-wrap justify-center pt-5 pb-5">
                <div onClick={UploadAction} className=" mr-2 border hover:bg-bgcolor hover:text-primary hover:font-bold hover:font-mono hover:text-[14px]  focus:border-btncolor p-4 w-[155px] h-[90px]">
                  <img
                    className="m-auto w-[25px] h-[26px] "
                    src="https://s1-ecp.printrunner.com/static/assets/img/product-page/upload-icon.png"
                  />
                  <p className="text-center text-[12px]">Upload My Artwork</p>
                </div>
                <div onClick={DesignAction} className=" mr-2 w-[155px] h-[90px] hover:bg-bgcolor hover:text-primary hover:font-bold border p-4">
                  <img
                    className="m-auto w-[25px] h-[26px]"
                    src="https://s1-ecp.printrunner.com/static/assets/img/product-page/design-icon.png"
                  />
                  <p className=" text-center text-[12px]">
                    Design Your File Online
                  </p>
                </div>
                <div onClick={BuyAction}
                  className="hover:bg-bgcolor hover:text-primary hover:font-bold w-[155px] h-[90px] mr-2 border p-4">
                  <img
                    className="m-auto w-[25px] h-[26px]"
                    src="https://s1-ecp.printrunner.com/static/assets/img/product-page/buy-now-icon.png"
                  />
                  <p className="text-center text-[12px]">
                    Buy now/Upload later
                  </p>
                </div>
              </div>
            </li>
            <div className="hidden lg:block border-t-2"> 
              <div className="text-2xl text-gray20 pl-4 p-5 flex">
                <h1 className="w-2/5">Printing Cost</h1>
                <b className="text-right w-9/12">&#36;{price}</b>
              </div>
              <div className="flex justify-center">
                <button className="text-2xl bg-btncolor w-9/12 text-white rounded-lg p-2 font-semibold">
                  {btnValue}
                </button>
              </div>
            </div>
            <div className="text-gray20 pl-4 p-5 flex">
                <h1 className="font-bold w-2/5 p-2">Estimate Shipping</h1>
                <input type="number" min="1" className="text-right w-3/5 border"/>
                <input type="button" className="text-primary bg-bgcolor font-bold p-2" value="GET RATES"></input>
              </div>
          </ul>
        </div>
        <div className="flex space-x-6 justify-center p-5">
          <div className="w-fit m-2 w-[155px] h-[90px]">
            <img
              className="m-auto w-[25px] h-[26px]"
              src="https://s1-ecp.printrunner.com/static/assets/img/product-page/share-calc.png"
            />
            <p className="text-center">Share this configuration</p>
          </div>
          <div className="w-fit m-2 w-[155px] h-[90px]">
            <img
              className="m-auto w-[25px] h-[26px]"
              src="https://s1-ecp.printrunner.com/static/assets/img/product-page/custom-quote.png"
            />
            <p className=" text-center">Need a custom quote?</p>
          </div>
          <div className="w-fit m-2 w-[155px] h-[90px]">
            <img
              className="m-auto w-[25px] h-[26px]"
              src="https://s1-ecp.printrunner.com/static/assets/img/product-page/free-file-check.png"
            />
            <p className="text-center">Start with a FREE Proof</p>
          </div>
        </div>
      </div>
      <div style={{zIndex: 10}} className="lg:hidden fixed w-full p-8 flex justify-center bottom-0 bg-white">
        <div className="w-1/2 text-2xl">
          <h1 className="font-bold ml-10">&#36;{price}</h1>
          <p className="text-gray20 text-lg">Only &#36;{price} each</p>
        </div>
        <button className="bg-[#ff9b00] w-1/2 text-white outline-none hover:bg-orange-500 ">
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default ShopNow
