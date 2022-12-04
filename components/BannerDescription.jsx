import categories from '../utils/categories.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCheck } from '@fortawesome/free-solid-svg-icons'

function BannerDescription() {
 const binoculars = <FontAwesomeIcon icon={faBinoculars} />
  return (
    <div  className='flex mb-20 md:w-[98.2vw] border justify-center'>
      <div className='md:border-2 mt-20 md:w-9/12'>
        <div className="h-20 bg-gray-200">
          <div className="flex w-36 border-t-4 border-blue-500 bg-blue-100 p-5 text-blue-500 flex-col justify-center text-2xl h-20">
            <i className="text-center">{binoculars}</i>
            <h3 className="font-semibold">Overview</h3>
          </div>
        </div>
        <div className="m-4 mt-10 ">
          <h1 className="font-medium text-slate-900 text-2xl">
            Banner Printing for Every Season and Situation
          </h1>
          <p className="mt-5 text-slate-900">
            If you want your message to be seen instantly by a lot of people,
            the best way to do it is through custom banners. Banner printing is
            one of the most popular forms of advertising because it’s versatile,
            budget-friendly, and proven to be effective.{' '}
          </p>
          <p className="mt-5 text-slate-900">
            Since banners are highly customizable and available in several
            styles, they can easily fit any situation. If you are joining a
            trade show or conference, step and repeat banners can double as a
            booth backdrop and a photo wall. Put up X-stand banners and
            retractable banners to make your brand easier to spot among the
            throngs of exhibitors and attendees.
          </p>
          <p className="mt-5 text-slate-900">
            If you are a store owner preparing for a branch opening or an
            upcoming promo, turn heads with a vibrant vinyl banner! Are you
            located somewhere breezy or gale-prone? Check out our mesh and
            fabric banners that’ll simply sway and flutter with the wind. For
            restaurant owners, why not use tabletop banners to showcase your
            menu or bestselling dishes?
          </p>
          <p className="mt-5 text-slate-900">
            Even intimate celebrations can benefit from our banner printing
            services. Whether you’re sharing a personal milestone or sending
            holiday greetings to the whole community, announce it with a custom
            banner!
          </p>
          <h1 className="font-medium text-slate-900 text-2xl mt-10">
            Why Choose PrintRunner for Your Custom Banners
          </h1>
          <p className="mt-5 text-slate-900">
            We mean it when we say our banner printing services can 100%
            accommodate your advertising requirements, no matter how
            out-of-the-world it is. Here are the top reasons why you should
            trust the experts at PrintRunner to handle your custom banner:{' '}
          </p>
          <p className="mt-5 text-slate-900">
            <i className=" font-bold">
              We have a wide range of styles for custom banners.
            </i>
            &nbsp; Whether you want your banners free standing, hung from a
            pole, or mounted on a wall, we got you! We have several styles
            suited for indoor and outdoor use, so you don’t have to look for a
            different supplier or printing company.
          </p>
          <p className="mt-5 text-slate-900">
            <i className=" font-bold">
              Our banners can be customized in different ways.
            </i>
            &nbsp; If you can’t find the right banner size from our impressive
            range of size options, you can submit custom dimensions for banner
            printing. Depending on how you want to display your banner, there
            are optional finishings such as pole pockets, grommets, or brackets
            that you can add to your order before you check out. We can also
            print on both sides for selected banner types such as pole banners
            and step and repeat banners so you can maximize their use.
          </p>
          <p className="mt-5 text-slate-900">
            <i className=" font-bold">
              You don’t have to break a sweat when it comes to design.
            </i>
            &nbsp; You can download our blank templates for free if you don’t
            have a print-ready design yet. You can use these as guides as you
            create your artwork with your preferred design software. No
            professional design skills? Use our online tool instead! No time to
            work on one?
            <a className="text-blue-500 hover:underline">
              {' '}
              Ask us about our design services.
            </a>
          </p>
        </div>
      </div>   
    </div>
  )
}
export default BannerDescription