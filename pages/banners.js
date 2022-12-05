import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import MainBanner from '../images/mainbanner.jpeg'
import Meta from '../components/Meta'
import categories from '../utils/categories.json'

export default function banners({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
}) {
  categories.banners.map((banner) => {
    productTypeName = banner.name
  })
  bgImage = MainBanner
  categoryTitle = 'Banner Printing'
  categoryDescriptionOne = 'Banner printing services to promote your brand'
  categoryDescriptionTwo = 'Best for convention and trade shows'
  categoryDescriptionThree = 'Wide array of indoors and outdoors options'

  return (
    <>
      <Meta />
      <div className="container">
        <BannerHead
          bgImage={bgImage}
          categoryTitle={categoryTitle}
          categoryDescriptionOne={categoryDescriptionOne}
          categoryDescriptionTwo={categoryDescriptionTwo}
          categoryDescriptionThree={categoryDescriptionThree}
        />
        <BannerProducts productTypeName={productTypeName} />
        <BannerDescription />
      </div>
    </>
  )
}
