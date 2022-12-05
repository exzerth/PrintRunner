import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import businessHero from '../images/businesscategoryhero.jpeg'
import Meta from '../components/Meta'
import businessCategory from '../utils/business.json'

export default function business({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
  productTypeImage,
  productTypeDetails,
}) {
  bgImage = businessHero
  categoryTitle = 'Business Cards'
  categoryDescriptionOne = 'Present your personal brand and style'
  categoryDescriptionTwo = 'Best for convention and trade shows'
  categoryDescriptionThree = 'Wide array of indoors and outdoors options'
  productTypeName
  productTypeImage
  productTypeDetails

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
        <div className="container mt-5">
          <div className="w-full flex justify-center px-[15px] md:px-[24px] flex-wrap">
            <div className="columns-2 lg:columns-3 w-full">
              {businessCategory.business.map((business) => (
                <BannerProducts
                  key={business.name}
                  productTypeName={business.name}
                  productTypeImage={business.image}
                  productTypeDetails={business.details.map((detail, index) => (
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
