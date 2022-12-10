const CategoryHeader = (props) => {
    const categoryHeaderTitle = props.categoryHeaderTitle
    const categoryHeaderSubtitle = props.categoryHeaderSubtitle

    return (
        <div className='text-center mb-[20px]'>
            <div className="text-[20px] font-semibold mb-[7px] text-gray20">{categoryHeaderTitle}</div>
            <div className="text-[14px] mb-[8px] leading-[19px] text-[#666666]">{categoryHeaderSubtitle}</div>
        </div>
    )
}

export default CategoryHeader