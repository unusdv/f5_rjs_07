
import React from 'react';
import './Footer.scss';
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer'>
            <div>
            <ul className='footer-menu'>
                <li className='menu-item' >Buy</li>
                <li>Registration</li>
                <li>eBay Money Back Guarantee</li>
                <li>Stores</li>
                <li>eBay for Charity</li>
                <li>Charity Shop</li>
                <li>Seasonal Sales and events</li>
            </ul>
            <ul className='footer-menu'>
                <li className='menu-item'>Sell</li>
                <li>Start selling</li>
                <li>Learn to sell</li>
                <li>Business sellers</li>
                <li>Affiliates</li>

                <li className='menu-item'>Tools & apps</li>
                <li>Developers</li>
                <li>Delivery</li>
                <li>Security center</li>
                <li>Site map</li>
            </ul>
            <ul className='footer-menu'>
                <li className='menu-item'>Stay connected</li>
                <li><FaFacebookSquare /> Facebook</li>
                <li><FaTwitterSquare /> Twitter</li>
            </ul>
            <ul className='footer-menu'>
                <li className='menu-item'>About eBay</li>
                <li>Company info</li>
                <li>News</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Diversity & Inclusion</li>
                <li>Global Impact</li>
                <li>Government relations</li>
                <li>Advertise with us</li>
                <li>Policies</li>
                <li>Verified Rights Owner (VeRO) Program</li>
                <li>eCI Licenses</li>
            </ul>
            <ul className='footer-menu'>
                <li className='menu-item'>Help & Contact</li>
                <li>Seller Center</li>
                <li>Contact us</li>
                <li>eBay Returns</li>

                <li className='menu-item'>Community</li>
                <li>Announcements</li>
                <li>eBay Community</li>
                <li>eBay for Business Podcast</li>

                <li className='menu-item'>eBay Sites</li>

                <li>
                    <select style={{color: '#767676', fontSize: '11px', fontStyle: 'normal',fontWeight: '400', lineHeight:'12px'}}>
                        <option value="country3">
                            <img src="country1-flag.png" alt="Country 1 Flag" />
                            United States
                        </option>
                        <option  value="country2">
                            <img src="country2-flag.png" alt="Country 2 Flag" />
                            Russian
                        </option>
                        <option value="country3">
                            <img src="country3-flag.png" alt="Country 3 Flag" />
                            Uzbekistan
                        </option>
                    </select>
                </li>
            </ul>
            </div>
            <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.Accessibility,User Agreement,Privacy,Payments Terms of Use,Cookies,Your Privacy Choices,And AdChoice</p>
        </footer>
    );
};

export default Footer;
