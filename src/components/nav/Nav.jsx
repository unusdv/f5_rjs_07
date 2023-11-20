import React from 'react';
import Logo from '../../assets/eby.svg';
import { ImSearch } from "react-icons/im";
import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="logo">
                <img className='nav__logo' src={Logo} alt="" />
            </div>
            <div>
                <select className='select'>
                    Shop by category
                    <option value="all">Shop by category</option>
                </select>
            </div>
            <div className='wrapper'>
                <ImSearch className='icon'/>    
                <input type="search" placeholder='Search for anything'/>
                <select>
                    All Categories
                    <option value="all">All Categories</option>
                </select>
            </div>
            <div >
                <button className="search-button">Search</button>
            </div>
            <div >
                <button className="advanced-button">Advanced</button>
            </div>
        </nav>
    );
};

export default Nav;
