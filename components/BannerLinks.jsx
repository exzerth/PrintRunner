import Link from 'next/link'
import React from 'react'

function BannerLinks() {
  return (
    <div className='md:flex justify-around mb-20'>
        <div className='p-5 pl-10'>
        <h2 className="md:font-semibold font-bold md:text-xl text-lg pb-5">Browse by Category</h2>
            <ul className="ml-4 marker:text-black list-disc flex flex-col space-y-2 ">
        
              <Link href="" className="text-primary hover:underline"><li>Postcards</li></Link>
                <Link href="/banners" className="text-primary hover:underline"><li>Banners</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Stickers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Labels</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Posters</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Signs</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Business Cards</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Flyers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Menus</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Bookmarks</li></Link>
            </ul>
        </div>
        <div className='p-5 pl-10'>
            <h2 className="md:font-semibold font-bold md:text-xl text-lg pb-5">Related Products</h2>
            <ul className="ml-4 marker:text-black list-disc flex flex-col space-y-2 ">
                <Link href="" className="text-primary hover:underline"><li>Custom Labels</li></Link>
                <Link href="/banners" className="text-primary hover:underline"><li>Custom Stickers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Standard Postcards</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Club Flyers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Bussiness Flyers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Carbonless Forms</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Straight Tuck End Boxes</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Packaging Sleeves </li></Link>
                <Link href="" className="text-primary hover:underline"><li>Packaging Labels</li></Link>
            </ul>
        </div>        
        <div className='p-5 pl-10'>
            <h2 className="md:font-semibold font-bold md:text-xl pb-5 text-lg">Top Sellers</h2>
            <ul className="ml-4 marker:text-black list-disc flex flex-col space-y-2 ">
                <Link href="" className="text-primary hover:underline"><li>Custom Boxes</li></Link>
                <Link href="/banners" className="text-primary hover:underline"><li>Custom Stickers</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Custom Labels</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Custom Postcards</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Step and Repeat Banners</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Window Clings</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Bulk Posters</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Custom Bookmarks</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Carbonless Forms</li></Link>
                <Link href="" className="text-primary hover:underline"><li>Straight Tuck End Boxes</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default BannerLinks