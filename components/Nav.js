import Link from 'next/link'
import { useRef } from 'react'
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
import NavFeaturedLinks from './NavFeaturedLinks'
import NavStickersLinks from './NavStickersLinks'

const Nav = () => {
  const menuRef = useRef(null)
  const menuDropdownRef = useRef(null)
  const accountRef = useRef(null)
  const accountDropdownRef = useRef(null)
  const searchOverlayRef = useRef(null)

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

  return (
    <>
      <nav className={navStyles['nav']}>
        <div className={navStyles['nav-wrapper']}>
          <div className={navStyles['nav-container']}>
            <div className={navStyles['top-nav']}>
              <div className={navStyles['brand-logo']}>
                <Link href="/">
                  <Image src={logoImg} alt="" />
                </Link>
              </div>
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
                  <a href="#designs">My Designs</a>
                  <a className={navStyles['top-nav-cart-icon']} href="#cart">
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
                    <NavFeaturedLinks />
                    <NavStickersLinks />
                    <li className={navStyles['nav-desktop-list-link']}>
                      <Link href="#marketing">Marketing Materials</Link>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <Link href="/banners">Signs & Banners</Link>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <Link href="#promotions">Promotional Products</Link>
                    </li>
                    <li className={navStyles['nav-desktop-list-link']}>
                      <Link href="#packaging">Packaging</Link>
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
                    onClick={toggleMenuDropdown}
                  >
                    Banners
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/business"
                    onClick={toggleMenuDropdown}
                  >
                    Business Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/flyers"
                    onClick={toggleMenuDropdown}
                  >
                    Flyers
                  </Link>
                </li>
                <li>
                  <Link
                    className={navStyles['menu-dropdown-links']}
                    href="/label"
                    onClick={toggleMenuDropdown}
                  >
                    Labels
                  </Link>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#stickers"
                    onClick={toggleMenuDropdown}
                  >
                    Stickers
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#carbonless-forms"
                    onClick={toggleMenuDropdown}
                  >
                    Carbonless Forms
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#order-status"
                    onClick={toggleMenuDropdown}
                  >
                    Check Order Status
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#contact"
                    onClick={toggleMenuDropdown}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className={navStyles['menu-dropdown-links']}
                    href="#help"
                    onClick={toggleMenuDropdown}
                  >
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
