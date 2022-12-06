import Link from 'next/link'
import { useRef, useState } from 'react'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import logoImg from '../images/pr-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faSearch,
  faPhone,
  faUser,
  faCartShopping,
  faShippingFast,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const menuRef = useRef(null)
  const menuDropdownRef = useRef(null)
  const accountRef = useRef(null)
  const accountDropdownRef = useRef(null)
  const searchOverlayRef = useRef(null)
  const mouseOverRef = useRef(null)

  const toggleMenuDropdown = () => {
    menuRef.current.classList.toggle(`${navStyles['menu-box-active']}`)
    menuRef.current.children[0].classList.toggle(
      `${navStyles['middle-nav-active']}`
    )
    menuDropdownRef.current.classList.toggle(
      `${navStyles['menu-dropdown-show']}`
    )
  }

  const toggleAccountDropdown = () => {
    accountRef.current.classList.toggle(`${navStyles['account-box-active']}`)
    accountRef.current.children[0].classList.toggle(
      `${navStyles['middle-nav-active']}`
    )
    accountDropdownRef.current.classList.toggle(
      `${navStyles['account-dropdown-show']}`
    )
  }

  const openSearchOverlay = () => {
    searchOverlayRef.current.classList.toggle(
      `${navStyles['search-overlay-show']}`
    )
  }

  const closeSearchOverlay = () => {
    searchOverlayRef.current.classList.toggle(
      `${navStyles['search-overlay-show']}`
    )
  }

  const handleMouseOver = () => {
    console.log(mouseOverRef.current.classList.toggle(`${navStyles['featured-dropdown-show']}`))
  }
  const handleMouseOut = () => {
    mouseOverRef.current.classList.toggle(`${navStyles['featured-dropdown-show']}`)
  }

  return (
    <>
      <nav className={navStyles['nav']}>
        <div className={navStyles['nav-wrapper']}>
          <div className={navStyles['nav-container']}>
            <div className={navStyles['top-nav']}>
              <Image className={navStyles['brand-logo']} src={logoImg} alt="" />
              <div className={navStyles['top-nav-search-box']}>
                <div className={navStyles['top-nav-search-icon-box']}>
                  <FontAwesomeIcon
                    className={navStyles['top-nav-search-icon']}
                    icon={faSearch}
                  />
                </div>
                <input
                  className={navStyles['top-nav-search-box-input']}
                  type="text"
                  placeholder="Search (e.g. waterproof labels, vinyl banners, etc.)"
                />
              </div>
              <div className={navStyles['top-nav-links-box']}>
                <div className={navStyles['top-nav-links-box-upper']}>
                  <FontAwesomeIcon
                    className={navStyles['services-angle-down']}
                    icon={faAngleDown}
                  />
                  <a href="#services">Services</a>
                  <a href="#help">Help</a>
                  <a className={navStyles['call-icon']} href="#call">
                    1-888-278-3120
                  </a>
                </div>
                <div className={navStyles['top-nav-links-box-lower']}>
                  <a
                    className={navStyles['top-nav-accounts-icon']}
                    href="#accouunt"
                  >
                    Account
                  </a>
                  <a href="#orders">My Orders</a>
                  <a href="designs">My Designs</a>
                  <a className={navStyles['top-nav-cart-icon']} href="cart">
                    Cart
                  </a>
                </div>
              </div>
            </div>

            <div className={navStyles['middle-nav']}>
              {/* make m-n-b into a component*/}

              {/* middle-nav desktop section start */}
              <div className={navStyles['middle-nav-desktop']}>
                <div className={navStyles['nav-desktop-wrapper']}>
                  <ul className={navStyles['nav-desktop-list']}>
                    <li className={navStyles['nav-desktop-list-link']} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                      <a href="#featured">Featured Products</a>
                      <div ref={mouseOverRef} className={navStyles['featured-dropdown']}>
                        <div className={navStyles["featured-dropdown-tabmenu"]}>
                          <label htmlFor="" className={navStyles['tabmenu-item']}>Best Sellers</label>
                          <label htmlFor="" className={navStyles['tabmenu-item']}>Shop By Industries</label>
                          <label htmlFor="" className={navStyles['tabmenu-item']}>Shop By Options</label>
                          <div className={navStyles["featured-tabmenu-content"]}>
                            <div className={navStyles["sellers-sub-menu"]}>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Labels</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="#">Business Cards</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/flyers">Promotional Products</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Stickers</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Signs & Banners</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Envelopes</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Flyers</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Hand Tags</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Others</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Postcards</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                              <div className={navStyles["sellers-sub-container"]}>
                                <h4 className={navStyles['submenu-link']}><a href="/label">Posters</a></h4>
                                <ul>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Custom Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Kiss Cut Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Roll Labels</a></li>
                                  <li className={navStyles['submenu-link-item']}><a href="#">Waterproof Labels</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <a href="#stickers">Stickers & Labels</a>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <a href="#marketing">Marketing Materials</a>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <a href="#banners">Signs & Banners</a>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <a href="#promotions">Promotional Products</a>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <a href="#packaging">Packaging</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* middle-nav desktop section end */}

              <div className={navStyles['middle-nav-mobile']}>
                <div
                  ref={menuRef}
                  className={navStyles['middle-nav-boxes']}
                  onClick={toggleMenuDropdown}
                >
                  <FontAwesomeIcon
                    id="menu-icon"
                    className={navStyles['middle-nav-icon']}
                    icon={faBars}
                  />
                  <h3>Menu</h3>
                </div>
                <div
                  className={navStyles['middle-nav-boxes']}
                  onClick={openSearchOverlay}
                >
                  <FontAwesomeIcon
                    className={navStyles['middle-nav-icon']}
                    icon={faSearch}
                  />
                  <h3>Search</h3>
                </div>
                <div className={navStyles['middle-nav-boxes']}>
                  <FontAwesomeIcon
                    className={navStyles['middle-nav-icon']}
                    icon={faPhone}
                  />
                  <h3>Call</h3>
                </div>
                <div
                  ref={accountRef}
                  className={navStyles['middle-nav-boxes']}
                  onClick={toggleAccountDropdown}
                >
                  <FontAwesomeIcon
                    className={navStyles['middle-nav-icon']}
                    icon={faUser}
                  />
                  <h3>Account</h3>
                </div>
                <div className={navStyles['middle-nav-boxes']}>
                  <FontAwesomeIcon
                    className={navStyles['middle-nav-icon']}
                    icon={faCartShopping}
                  />
                  <h3>Cart</h3>
                </div>
              </div>
            </div>

            {/* middle-nav-dropdowns and more */}
            <div
              ref={menuDropdownRef}
              className={navStyles['menu-dropdown-wrapper']}
            >
              <ul className={navStyles['menu-dropdown-container']}>
                <li>
                  <h6 className={navStyles['menu-dropdown-title']}>
                    CATEGORIES
                  </h6>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/banners"
                  >
                    Banners
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/business"
                  >
                    Business Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/flyers"
                  >
                    Flyers
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/label"
                  >
                    Labels
                  </Link>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#stickers"
                  >
                    Stickers
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#carbonless-forms"
                  >
                    Carbonless Forms
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#order-status"
                  >
                    Check Order Status
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className={navStyles['menu-dropdown-links']} href="#help">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={accountDropdownRef}
              className={navStyles['account-dropdown-wrapper']}
            >
              <ul className={navStyles['account-dropdown-container']}>
                <li className={navStyles['login-btn']}>
                  <div className={navStyles['login-btn-box']}>
                    <a href="#login">LOG IN</a>
                  </div>
                </li>
                <li>
                  <a
                    className={navStyles['account-dropdown-links']}
                    href="#order-status"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['account-dropdown-links']}
                    href="#quotes"
                  >
                    Quotes
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['account-dropdown-links']}
                    href="#saved"
                  >
                    Saved Designs
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['account-dropdown-links']}
                    href="#settings"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            <div ref={searchOverlayRef} className={navStyles['search-wrapper']}>
              <div className={navStyles['search-container']}>
                <FontAwesomeIcon
                  className={navStyles['search-icon']}
                  icon={faSearch}
                />
                <input
                  type="text"
                  placeholder="Search (e.g. Waterproof Labels, Vinyl Banners, e.t.c)"
                />
                <div
                  className={navStyles['close-search']}
                  onClick={closeSearchOverlay}
                >
                  Cancel
                </div>
              </div>
            </div>

            {/* middle-nav desktop dropsdowns start */}

            

            {/* middle-nav desktop dropsdowns end */}
            {/* middle-nav-dropdowns and more  ends*/}

            <div className={navStyles['bottom-nav']}>
              <FontAwesomeIcon
                className={navStyles['shipping-icon']}
                icon={faShippingFast}
              />
              <span>Enjoy FREE Shipping over $69</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
