import Clients from '../components/Clients'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeBanner from '../components/HomeBanner'
import Meta from '../components/Meta'
import Mission from '../components/Mission'
import Promised from '../components/Promised'

export default function Home() {
  return (
    <>
      <Meta />
      <div className="container mx-auto flex items-center relative mb-6 lg:w-9/12">
        <HomeBanner />
      </div>
      <div className="container mx-auto lg:w-4/5">
        <FeaturedProducts />
        <Promised />
        <Mission />
        <Clients />
      </div>
    </>
  )
}
