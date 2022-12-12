import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import { ThemeProvider } from 'styled-components'
import {breakpoint} from 'styled-components-breakpoint';

const theme = {
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 769,
        lg: 992,
        xl: 1200,
    },
}

const Div = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 16px;
text-align:center;
justify-items: center;

${breakpoint('xs', 'md')`
    display: none;
  `}
`

const Reviews = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="container mx-auto px-[15px] mb-[80px]">
        <Div>
            <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </Div>
    </div>
    </ThemeProvider>

    <div className="tabrousel">
        <Carousel itemsToShow={2}>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
        </Carousel>
    </div>

    <div className="mobilerousel">
        <Carousel itemsToShow={1}>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="border border-[#dcdcdc] min-h-[280px] mx-[8px] px-[24px] pt-[40px] pb-[24px] flex flex-col justify-center items-center">
                    <div className="title font-bold text-center mb-[8px] text-[18px]">The stickers are perfect</div>
                    <div className="content mb-[32px] text-center text-[14px]">Great quality printing, great customer service and the representative was kind and helpful</div>
                    <div className="name text-[14px] font-bold mb-[8px]">Rob H. Geller</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
        </Carousel>
    </div>
    </>
  )
}

export default Reviews