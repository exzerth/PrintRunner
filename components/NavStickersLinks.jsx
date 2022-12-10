import Link from 'next/link'
import { useRef, useState } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavStickersLinks = () => {

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
        <a href="#stickers">Stickers & Labels</a>
        <div ref={mouseOverRef} className={navStyles['stickers-dropdown']}>
                <div className={navStyles["stickers-sub-menu"]}>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Shop By Type</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Sticker Singles</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Cut-to-Size Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Roll Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Die Cut Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Sticker Sheets</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Sheet Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Use & Application</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bumper Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Candle Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Canning Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Food Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Health & Beauty Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Logo Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Packaging Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Promotional & Event Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Shipping & Mailing Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Wall Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Water Bottle Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Wine Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Warning Labels</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Shop By Materials</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Clear Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Clear Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Metallic Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vinyl Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vinyl Stickers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Shapes</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Square / Rectangle</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Round</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Oval</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Arch</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Hexagon</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Heart</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Starbust</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Custom Shape</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    </li>
    </>
  )
}

export default NavStickersLinks