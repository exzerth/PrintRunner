import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
    <footer className="bg-[#ebeef3] text-center py-[40px] text-gray20">
        <div className="px-[15px]">
            <div className="boxup flex flex-col items-center">
                <div className="boxup-box flex flex-col grow items-center basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">Products & Services</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">All Products</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Mailing Services</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Design Services</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Custom Quotes</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Free File Review</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Free Sample Kit</a>
                </div>
                <div className="boxup-box flex flex-col grow items-center basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">Help & Resources</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Contact Us</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Pickup Locations</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Turnaround Information</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">File Preparation Guide</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Cancellation & Refunds</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Help Center</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Blog</a>
                </div>
                <div className="boxup-box flex flex-col grow items-center basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">PrintRunner.com</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">About Us</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Terms & Conditions</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Privacy Policy</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Anti-spam Policy</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Accessibility</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Payment Methods</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Site Map</a>
                </div>
            </div>
            <div className="boxdown">
                <div>
                    <div className="social text-center">
                        <div className="mb-[8px] font-bold text-[18px]">Join Us</div>
                        <div className="social_links text-primary text-[23px]">
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faFacebookF} className="mr-[35px]"/></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faTwitter} className="mr-[35px]"/></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faRss} className="mr-[35px]"/></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faLinkedinIn} className="mr-[35px]"/></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faInstagram} className="mr-0"/></a>
                        </div>
                    </div>
                    <div className="news mt-[40px]">
                        <div className="newsbox mb-[20px] max-w-[400px]">
                            <div className="mb-[8px] font-bold text-[18px]">Don&apos;t Miss Out</div>
                            <p className='mb-[24px] leading-[19px] font-normal'>Exclusive offers and products are just a click away.</p>
                            <form action="">
                                <div className="formbox flex justify-between">
                                    <div className="forminput w-[100%]">
                                        <input type="text" className='h-[40px] py-[10px] px-[16px] border border-[#dcdcdc] rounded-l w-[100%]' placeholder='Email Address'/>
                                    </div>
                                    <div className="formbtn min-w-auto w-[120px] rounded-r bg-[#1976ED] text-white">
                                        <button className='border-primary min-h-[40px] text-sm px-[11px] font-bold'>SIGN UP</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="copyright text-center text-[#999999] test-sm">© 2022 PrintRunner.com All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer