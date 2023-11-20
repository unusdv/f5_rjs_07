import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
        <div className='nav__register'>
            <div className="register">
                <h1>Hi!</h1>
                <Link className='link-log' to="/login">Sign In</Link>
                <p>or</p>
                <Link className='link-log' to="/signup">Register</Link>
            </div>
            <div className="help-contact">
                <p>Daily Deals</p>
                <p>Brand Outlet</p>
                <p>Help & Contact</p>
            </div>
        </div>
        <div className="sells">
            <div>
                <p>Sell</p>
                <select>
                    <option value="watchList">Watchlist</option>
                </select>
                <select>
                    <option value="myEbay">My Ebay</option>
                </select>
            </div>
            <FaRegBell className='icon'/>
            <BsCart2 className='icon'/>
        </div>
    </nav>
  )
}

export default Navbar