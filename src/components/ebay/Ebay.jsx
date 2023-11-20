
import React from 'react';
import './Ebay.scss';
import logo from "../../assets/div.png";
import Ug from '../../assets/u.png';
import Img from '../../assets/image.png'
import { IoArrowForwardOutline } from "react-icons/io5";


const Ebay = () => {
  return (
    <div className='ebay'>
      <div className='ebay-item'>
        <span>Featured</span>
        <img src={logo} alt="" />
        <p>Deals made easy all year long.</p>
        <button>Get your thing <IoArrowForwardOutline/></button>
      </div>
      <div>
        <img src={Ug} alt="Image 1" />
        <img className='image' src={Img} alt="Image 2" />
      </div>
    </div>
    
  );
};

export default Ebay;
