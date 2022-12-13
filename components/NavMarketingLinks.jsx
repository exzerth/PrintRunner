import Link from 'next/link'
import { useRef } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavMarketingLinks = () => {

  const mouseOverRef = useRef(null)

  const handleMouseOver = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['stickers-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.add(`${navStyles['desktop-link-active']}`)
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['stickers-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.remove(`${navStyles['desktop-link-active']}`)
  }

  return (
    <>
    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href="#stickers">Marketing Materials</a>
        <div ref={mouseOverRef} className={navStyles['stickers-dropdown']}>
                <div className={navStyles["markets-sub-menu"]}>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Brochures and Flyers</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Brochures</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Business Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die-Cut Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Flyers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Silk Flyers</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Business Cards</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Standard Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die-Cut Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Plastic Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Foil Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Spot UV Business Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Folded Business Cards</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Events</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Save the Date Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Thank You Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Tickets</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Invitations</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Greeting Cards</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Postcards</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Standard Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Spot UV Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Silk Postcards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Velvet Postcards</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Advertising</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Door Hangers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Rack Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Counter Cards</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Magnets</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Other Marketing Materials</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Gift Certificates</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Table Tents</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Booklets</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Catalogs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Magazines</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    </li>
    </>
  )
}

export default NavMarketingLinks