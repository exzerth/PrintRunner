import Link from 'next/link'
import { useRef } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavPromoLinks = () => {

  const mouseOverRef = useRef(null)

  const handleMouseOver = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['promo-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.add(`${navStyles['desktop-link-active']}`)
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['promo-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.remove(`${navStyles['desktop-link-active']}`)
  }

  return (
    <>
    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href="#stickers">Promotional Products</a>
        <div ref={mouseOverRef} className={navStyles['promo-dropdown']}>
                <div className={navStyles["promo-sub-menu"]}>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Apparel</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vinyl Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Retractable Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Mesh Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Fabric Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Pole Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">X-Stand Banners</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Promotional Products</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Tension Pop-Up</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Backdrops</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Step & Repeat Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Table Covers</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    </li>
    </>
  )
}

export default NavPromoLinks