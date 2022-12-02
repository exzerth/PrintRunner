import Image from "next/image"
import googleImg from "../images/google.png"

const Clients = () => {
  return (
    <>
    <div className="container px-[15px] text-gray20 bg-bgcolor pt-[45px] pb-4 mb-12">
        <div className="clients">
            <div className="font-semibold text-xl mb-[78px] text-center">Customers Who Trust Printrunner</div>
            <div className="container">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="flex-[20%] text-center px-2 mb-[52px]">
                            <Image src={googleImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Clients