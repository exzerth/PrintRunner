import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import BannerLinks from '../components/BannerLinks'
import envelopeHero from '../images/envelopecategorybanner.jpeg'
import Meta from '../components/Meta'
import labelsCategory from '../utils/labels.json'
import CategoryHeader from '../components/CategoryHeader'

export default function envelopes({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
  productTypeImage,
  productTypeDetails,
}) {
  bgImage = envelopeHero
  categoryTitle = 'Envelope Printing'
  categoryDescriptionOne = '1-colour or full colour envelope printing'
  categoryDescriptionTwo = 'Turn blank envelope to marketing tools'
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
            <CategoryHeader categoryHeaderTitle="Envelopes" />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              {labelsCategory.label.popular.map((label) => (
                <BannerProducts
                  key={label.name}
                  productTypeName={label.name}
                  productTypeImage={label.image}
                  productTypeDetails={label.details.map((detail, index) => (
                    <li className="mb-[5px]" key={index}>
                      {detail}
                    </li>
                  ))}
                />
              ))}
            </div>
            <CategoryHeader categoryHeaderTitle="Shipping and Mailer" />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              {labelsCategory.label.type.map((label) => (
                <BannerProducts
                  key={label.name}
                  productTypeName={label.name}
                  productTypeImage={label.image}
                  productTypeDetails={label.details.map((detail, index) => (
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
