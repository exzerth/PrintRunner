import Link from 'next/link'
import Meta from '../components/Meta'
export default function FourOhFour() {
  return (
    <>
      <Meta />
      <div className="container mx-auto w-1/2 text-center p-20 space-y-5">
        <h1 className="text-3xl font-bold">
          The page you are trying to view is not available
        </h1>
        <p>Try browsing our products and get the best online printing deals.</p>
        <Link href="/">
          <button className="bg-btncolor mt-5 hover:bg-orange-500 p-3 w-full text-white font-bold rounded-[5px]">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </>
  )
}
