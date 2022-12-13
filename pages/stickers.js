import BannerDescription from '../components/BannerDescription'
import BannerHead from '../components/BannerHead'
import BannerProducts from '../components/BannerProducts'
import BannerLinks from '../components/BannerLinks'
import stickerHero from '../images/stickercategorybanner.jpeg'
import Meta from '../components/Meta'
import labelsCategory from '../utils/labels.json'
import CategoryHeader from '../components/CategoryHeader'

export default function stickers({
  bgImage,
  categoryTitle,
  categoryDescriptionOne,
  categoryDescriptionTwo,
  categoryDescriptionThree,
  productTypeName,
  productTypeImage,
  productTypeDetails,
}) {
  bgImage = stickerHero
  categoryTitle = 'Stickers Printing'
  categoryDescriptionOne = 'A great selection of stickers for every need'
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
            <CategoryHeader
              categoryHeaderTitle="Most Popular"
              categoryHeaderSubtitle="The go-to choices for our sticker customers"
            />
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
            <CategoryHeader
              categoryHeaderTitle="Shop by Type"
              categoryHeaderSubtitle="Find the best personalized stickers for your project or business"
            />
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
            <CategoryHeader
              categoryHeaderTitle="Shop by Shape"
              categoryHeaderSubtitle="Get the exact shape and size you need"
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              {labelsCategory.label.shape.map((label) => (
                <BannerProducts
                  key={label.name}
                  productTypeName={label.name}
                  productTypeImage={label.image}
                />
              ))}
            </div>
            <CategoryHeader
              categoryHeaderTitle="Shop by Use"
              categoryHeaderSubtitle="Choose the best use for your project"
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              {labelsCategory.label.use.map((label) => (
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
            <CategoryHeader
              categoryHeaderTitle="Shop by Material"
              categoryHeaderSubtitle="Print on several high quality choices"
            />
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              {labelsCategory.label.material.map((label) => (
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
