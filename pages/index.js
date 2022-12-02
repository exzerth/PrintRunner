import FeaturedProducts from '../components/FeaturedProducts'
import HomeBanner from '../components/HomeBanner'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <>
      <Meta />
      <div className="flex items-center relative mb-6">
        <HomeBanner />
      </div>
      <FeaturedProducts />
    </>
  )
}
