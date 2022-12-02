import Image from "next/image"
import fastTurnImg from "../images/fastturnarpound.png"
import detailedImg from "../images/over-details.png"
import qualityImg from "../images/greatquality.png"

const Promised = () => {
  return (
    <>
    <div className="container px-[15px] text-gray20 bg-bgcolor pt-[45px] pb-4 mb-12">
        <div className="promises">
            <div className="flex align-center mb-[37px]">
                <div className="mr-[21px]">
                    <Image src={fastTurnImg} />
                </div>
                <div className="text">
                    <div className="text-base font-bold">FAST TURNAROUNDS</div>
                    <div className="text-sm font-normal">Meet your deadlines, even if they are last-minute.</div>
                </div>
            </div>
        </div>
        <div className="promises">
            <div className="flex align-center mb-[37px]">
                <div className="mr-[21px]">
                    <Image src={detailedImg} />
                </div>
                <div className="text">
                    <div className="text-base font-bold">OVER 400K ORDERS COMPLETED</div>
                    <div className="text-sm font-normal">25 years of experience you can rely on.</div>
                </div>
            </div>
        </div>
        <div className="promises">
            <div className="flex align-center mb-[37px]">
                <div className="mr-[21px]">
                    <Image src={qualityImg} className="max-w-none" />
                </div>
                <div className="text">
                    <div className="text-base font-bold">GREAT QUALITY</div>
                    <div className="text-sm font-normal">Superior paper, coating & ink to produce high quality printing.</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Promised