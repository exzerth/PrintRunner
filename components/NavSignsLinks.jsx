import Link from 'next/link'
import { useRef } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavSignsLinks = () => {

  const mouseOverRef = useRef(null)

  const handleMouseOver = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['signs-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.add(`${navStyles['desktop-link-active']}`)
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['signs-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.remove(`${navStyles['desktop-link-active']}`)
  }

  return (
    <>
    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href="#stickers">Signs & Banners</a>
        <div ref={mouseOverRef} className={navStyles['signs-dropdown']}>
                <div className={navStyles["signs-sub-menu"]}>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Banners</Link></h4>
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
                    <h4 className={navStyles['stickers-link']}><Link href="#">Displays</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Tension Pop-Up</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Backdrops</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Step & Repeat Banners</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Table Covers</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Other Signs</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Vehicle Magnets</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Real Estate Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Parking Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Property Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Stretched Canvas</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Rolled Canvas</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Posters</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Large Format Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bulk Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Mounted Posters</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Sticky Backs Posters</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Flags</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Feather Flags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Teardrop Flags</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Rigid Signs</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Aluminium Signs</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Yard Signs</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    </li>
    </>
  )
}

export default NavSignsLinks