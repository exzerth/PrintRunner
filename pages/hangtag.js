import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import tagHero from '../images/handtagcategortbanner.jpeg'
import Meta from '../components/Meta'
import flyersCategory from '../utils/flyers.json'

export default function hangtag({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
  productTypeImage,
  productTypeDetails,
}) {
  bgImage = tagHero
  categoryTitle = 'Hang Tags'
  categoryDescriptionOne = 'Brand your projects in style'
  categoryDescriptionTwo = 'Best for convention and trade shows'
  categoryDescriptionThree = 'Wide array of indoors and outdoors options'
  productTypeName
  productTypeImage
  productTypeDetails

  return (
    <>
      <Meta />
      <div className="container my-0 mx-auto">
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
              {flyersCategory.flyer.map((flyer) => (
                <BannerProducts
                  key={flyer.name}
                  productTypeName={flyer.name}
                  productTypeImage={flyer.image}
                  productTypeDetails={flyer.details.map((detail, index) => (
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
      </div>
    </>
  )
}
