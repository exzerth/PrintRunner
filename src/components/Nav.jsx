import React from 'react'
import '../css/nav.css'
import logoImg from '../images/pr-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faPhone, faUser, faCartShopping, faShippingFast } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  const toggleMenuDropdown = () => {
    document.querySelector('.menu-box').classList.toggle('menu-box-active')
    document.querySelector('.menu-icon').classList.toggle('middle-nav-active')
    document.querySelector('.menu-dropdown-wrapper').classList.toggle('menu-dropdown-show')
  }

  const toggleAccountDropdown = () => {
    document.querySelector('.account-box').classList.toggle('account-box-active')
    document.querySelector('.account-icon').classList.toggle('middle-nav-active')
    document.querySelector('.account-dropdown-wrapper').classList.toggle('account-dropdown-show')
  }

  const openSearchOverlay = () => {
    document.querySelector('.search-wrapper').classList.toggle('search-overlay-show')
  }

  const closeSearchOverlay = () => {
    document.querySelector('.search-wrapper').classList.toggle('search-overlay-show')
  }

  return (
    <>
    <nav>
        <div className="nav-wrapper">
          <div className="nav-container">
            <div className="top-nav">
              <img src={logoImg} alt="" />
            </div>
            <div className="middle-nav">
              {/* make m-n-b into a component */}
              <div className="middle-nav-boxes menu-box" onClick={toggleMenuDropdown}>
                <FontAwesomeIcon className='middle-nav-icon menu-icon' icon={faBars}/>
                <h3>Menu</h3>
              </div>
              <div className="middle-nav-boxes" onClick={openSearchOverlay}>
                <FontAwesomeIcon className='middle-nav-icon' icon={faSearch}/>
                <h3>Search</h3>
              </div>
              <div className="middle-nav-boxes">
                <FontAwesomeIcon className='middle-nav-icon' icon={faPhone}/>
                <h3>Call</h3>
              </div>
              <div className="middle-nav-boxes account-box" onClick={toggleAccountDropdown}>
                <FontAwesomeIcon className='middle-nav-icon account-icon' icon={faUser}/>
                <h3>Account</h3>
              </div>
              <div className="middle-nav-boxes">
                <FontAwesomeIcon className='middle-nav-icon' icon={faCartShopping}/>
                <h3>Cart</h3>
              </div>
            </div>


            {/* middle-nav-dropdowns and more */}
            <div className="menu-dropdown-wrapper">
                <ul className='menu-dropdown-container'>
                  <li><h6 className='menu-dropdown-title'>CATEGORIES</h6></li>
                  <li><a className='menu-dropdown-links' href="#banners">Banners</a></li>
                  <li><a className='menu-dropdown-links' href="#business-cards">Business Cards</a></li>
                  <li><a className='menu-dropdown-links' href="#flyers">Flyers</a></li>
                  <li><a className='menu-dropdown-links' href="#labels">Labels</a></li>
                  <li><a className='menu-dropdown-links' href="#stickers">Stickers</a></li>
                  <li><a className='menu-dropdown-links' href="#carbonless-forms">Carbonless Forms</a></li>
                  <li><a className='menu-dropdown-links' href="#order-status">Check Order Status</a></li>
                  <li><a className='menu-dropdown-links' href="#contact">Contact Us</a></li>
                  <li><a className='menu-dropdown-links' href="#help">Help</a></li>
                </ul>
            </div>

            <div className="account-dropdown-wrapper">
              <ul className='account-dropdown-container'>
                <li className='login-btn'>
                  <div className="login-btn-box">
                    <a href="#login">LOG IN</a>
                  </div>
                </li>
                <li><a className='account-dropdown-links' href="#order-status">Order Status</a></li>
                <li><a className='account-dropdown-links' href="#quotes">Quotes</a></li>
                <li><a className='account-dropdown-links' href="#saved">Saved Designs</a></li>
                <li><a className='account-dropdown-links' href="#settings">Settings</a></li>
              </ul>
            </div>

            <div className="search-wrapper">
              <div className="search-container">
                <input type="text" />
                <div className='close-search' onClick={closeSearchOverlay}>Cancel</div>
              </div>
            </div>
            {/* middle-nav-dropdowns and more  ends*/}


            <div className="bottom-nav">
              <FontAwesomeIcon className='shipping-icon' icon={faShippingFast}/><span>Enjoy FREE Shipping over $69</span>
            </div>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Nav