import Link from 'next/link'
import { useRef } from 'react'
import navStyles from '../styles/Nav.module.css'

const NavPackageLinks = () => {

  const mouseOverRef = useRef(null)

  const handleMouseOver = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['package-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.add(`${navStyles['desktop-link-active']}`)
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['package-dropdown-show']}`)
    mouseOverRef.current.parentElement.classList.remove(`${navStyles['desktop-link-active']}`)
  }

  return (
    <>
    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href="#stickers">Packaging</a>
        <div ref={mouseOverRef} className={navStyles['package-dropdown']}>
                <div className={navStyles["package-sub-menu"]}>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Label & Product Packaging</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Labels</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Pouches</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Boxes</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bag Toppers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Packaging Shelves</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Shipping Supplies</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Bubble Mailers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Poly Mailers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Rigid Mailers</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Tissue Paper</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Packing Tape</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Shopping Bags</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Paper Bags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Packing Bags</a></li>
                    </ul>
                    </div>
                    <div className={navStyles["stickers-sub-container"]}>
                    <h4 className={navStyles['stickers-link']}><Link href="#">Gift Wrapping</Link></h4>
                    <ul>
                        <li className={navStyles['submenu-link-item']}><a href="#">Gift Bags</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Tissue Paper</a></li>
                        <li className={navStyles['submenu-link-item']}><a href="#">Ribbons</a></li>
                    </ul>
                    </div>
                </div>
        </div>
    </li>
    </>
  )
}

export default NavPackageLinks