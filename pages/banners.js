import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import MainBanner from '../images/mainbanner.jpeg'
import Meta from '../components/Meta'
import categories from '../utils/categories.json'
import BannerLinks from '../components/BannerLinks'

export default function banners({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
  productTypeImage,
  productTypeDetails
}) {
  bgImage = MainBanner
  categoryTitle = 'Banner Printing'
  categoryDescriptionOne = 'Banner printing services to promote your brand'
  categoryDescriptionTwo = 'Best for convention and trade shows'
  categoryDescriptionThree = 'Wide array of indoors and outdoors options'
  productTypeName
  productTypeImage
  productTypeDetails

  return (
    <>
      <Meta />
      <div className="container my-0 mx-auto lg:w-4/5">
        <BannerHead
          bgImage={bgImage}
          categoryTitle={categoryTitle}
          categoryDescriptionOne={categoryDescriptionOne}
          categoryDescriptionTwo={categoryDescriptionTwo}
          categoryDescriptionThree={categoryDescriptionThree}
        />
        <div className="container mt-5">
          <div className="w-full flex justify-center px-[15px] md:px-[24px] flex-wrap">
            <div className="columns-2 lg:columns-3 w-full">
              {categories.banners.map(banner => (
                <BannerProducts
                  key={banner.name}
                  productTypeName={banner.name}
                  productTypeImage={banner.image}
                  productTypeDetails={banner.details.map((detail, index) => (
                    <li className="mb-[5px]" key={index}>
                      {detail}
                    </li>
                  ))}
                />
              ))}
            </div>
          </div>
        </div>
        <BannerDescription />
        <BannerLinks />
      </div>
    </>
  )
}
