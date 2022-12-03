import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import Meta from '../components/Meta'
export default function banners() {
  return (
    <>
      <Meta />
      <div className="container">
        <BannerHead />
        <BannerProducts />
        <BannerDescription />
      </div>
    </>
  )
}
