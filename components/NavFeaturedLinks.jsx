import Link from 'next/link'
import { useRef, useState } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavFeaturedLinks = () => {

  const [toggleState, setToggleState] = useState(1);
  const mouseOverRef = useRef(null)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleMouseOver = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['featured-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.add(`${navStyles['desktop-link-active']}`)
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['featured-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.remove(`${navStyles['desktop-link-active']}`)
  }

  return (
    <>
    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href="#featured">Featured Products</a>
        <div ref={mouseOverRef} className={navStyles['featured-dropdown']}>
        <div className={navStyles["featured-dropdown-tabmenu"]}>
            <label htmlFor="" className={toggleState === 1 ? `${navStyles['tabmenu-item']} ${navStyles['label-active']}` : `${navStyles['tabmenu-item']}`} onMouseOver={() => toggleTab(1)}>Best Sellers</label>
            <label htmlFor="" className={toggleState === 2 ? `${navStyles['tabmenu-item']} ${navStyles['label-active']}` : `${navStyles['tabmenu-item']}`} onMouseOver={() => toggleTab(2)}>Shop By Industries</label>
            <label htmlFor="" className={toggleState === 3 ? `${navStyles['tabmenu-item']} ${navStyles['label-active']}` : `${navStyles['tabmenu-item']}`} onMouseOver={() => toggleTab(3)}>Shop By Options</label>
            <div className={navStyles["featured-tabmenu-content"]}>
                <div className={toggleState === 1 ? `${navStyles["sellers-sub-menu"]} ${navStyles["sellers-sub-menu-active"]}` : `${navStyles["sellers-sub-menu"]}`}>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/label">Labels</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/business">Business Cards</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Standard Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die Cut Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Folded Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Plastic Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Foil Business Cards</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="#products">Promotional Products</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Notepads</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Pens</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bookmarks</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Calendars</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Magnets</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/stickers">Stickers</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Custom Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die Cut Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vinyl Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bumper Stickers</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="#">Signs & Banners</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><Link href="/banners">Banners</Link></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vinyl Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">A Frame Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Pop-up Displays</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/envelopes">Envelopes</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">1-Color Envelopes</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Full Color Envelopes</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/flyers">Flyers</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Business Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die Cut Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Club Card Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Silk Flyers</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/hangtag">Hang Tags</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Standard Hang Tags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die Cut Hang Tags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bottleneck Hang Tags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Folded Hang Tags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Foil Hang Tags</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="/posters">Posters</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Large Format Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bulk Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Mounted Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Sticky Back Posters</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="#postcards">Postcards</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Standard Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Folded Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Spot UV Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Silk Postcards</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["sellers-sub-container"]}>
                    <h4 className={navStyles['submenu-link']}><Link href="#others">Others</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Brochures</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Carbonless Forms</a></li>
                    </ul>
                    </div>
                    <Link className={navStyles['submenu-see-all']} href="/productlist">See All Products</Link>
                </div>
                <div className={toggleState === 2 ? `${navStyles["industry-sub-menu"]} ${navStyles["industry-sub-menu-active"]}` : `${navStyles["industry-sub-menu"]}`}>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-realestate']}`}><a href='#'>Real Estate</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><Link href="/banners">Banners</Link></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Business Cards</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Flyers</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Postcards</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Door Hangers</a></li>
                        </ul>
                    </div>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-retail']}`}><a href='#'>Retail</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Labels</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Stickers</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Hand Tags</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Counter Cards</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Gift Certificates</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Banners</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Posters</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Boxes</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Catalogs</a></li>
                        </ul>
                    </div>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-restaurant']}`}><a href='#'>Restaurant</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Menu</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Decals</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Table Tents</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Carbonless Forms</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Posters</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Banners</a></li>
                        </ul>
                    </div>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-candle']}`}><a href='#'>Candle</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Labels</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Stickers</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Boxes</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Business Cards</a></li>
                        </ul>
                    </div>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-cannabis']}`}><a href='#'>Cannabis</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Stickers</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Labels</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Business Cards</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Boxes</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Packaging Tape</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">T Shirts</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Flyers</a></li>
                        </ul>
                    </div>
                    <div className={navStyles["industry-submenu-container"]}>
                        <h4 className={`${navStyles['i-submenu-link']} ${navStyles['i-health']}`}><a href='#'>Health Care</a></h4>
                        <ul>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Carbonless Forms</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Stickers</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Labels</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Rack Cards</a></li>
                            <li className={navStyles['i-submenu-link-item']}><a href="#">Posters</a></li>
                        </ul>
                    </div>
                </div>
                <div className={toggleState === 3 ? `${navStyles["options-sub-menu"]} ${navStyles["options-sub-menu-active"]}` : `${navStyles["options-sub-menu"]}`}>
                    <div className={navStyles['options-submenu-container']}>
                        <h4 className={`${navStyles['o-submenu-link']} ${navStyles['o-finish']}`}><a href='#'>Special Finishes</a></h4>
                        <ul>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Foil Bookmarks</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Foil Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Raised Spot UV Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Silk Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Spot UV Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Velvet Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Foil Hang Tags</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Silk Hang Tags</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Spot UV Hang Tags</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Velvet Hang Tags</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Raised Spot UV Postcards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Silk Postcards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Spot UV Postcards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Velvet Postcards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Spot UV Rack Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Spot UV Header Cards</a></li>
                        </ul>
                    </div>
                    <div className={navStyles['options-submenu-container']}>
                        <h4 className={`${navStyles['o-submenu-link']} ${navStyles['o-material']}`}><a href='#'>Material</a></h4>
                        <ul>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Vinyl Banners</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Vinyl Stickers</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Bookmarks</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Hand Tags</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Postcards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Save the Date Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Labels</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Metallic Stickers</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Plastic Business Cards</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Plastic A Frame Signs</a></li>
                        </ul>
                    </div>
                    <div className={navStyles['options-submenu-container']}>
                        <h4 className={`${navStyles['o-submenu-link']} ${navStyles['o-type']}`}><a href='#'>Type</a></h4>
                        <ul>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Cut-to-Size Stickers</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Roll Stickers</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Sticker Sheets</a></li>
                            <li className={navStyles['o-submenu-link-item']}><a href="#">Kiss Cut Stickers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </li>
    </>
  )
}

export default NavFeaturedLinks