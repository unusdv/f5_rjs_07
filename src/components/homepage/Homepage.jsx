import React, { useState, useEffect } from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";
import './Homepage.scss';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Homepage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='main-wrapper'>
        <div className='main-item'>
            <h1>Super savings at <br /> the Brand Outlet</h1>
            <p>Up to 60% off the brands you love.</p>
            <button>Shop now <IoArrowForwardOutline /></button>
        </div>
      <div className='swppp'>
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {categories.map(category => 
                <SwiperSlide key={category.id}>
                    <div className="category-wrapper">
                        <h2>{category.name}<IoArrowForwardOutline/></h2>
                        <img className='category-images'  src={category.image} alt={category.name} />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        
      </div>
    </div>
  );
};

export default Homepage;
