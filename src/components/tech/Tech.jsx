import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Tech.scss';
import { IoArrowForwardOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Tech = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
console.log(products);
    return (
        <div>
            <div className="text">
                <p>Today's Deals – All With Free Shipping</p>
                <p>See all <IoArrowForwardOutline/> </p>
            </div>
            <Swiper
            spaceBetween={30}
            slidesPerView={6}
            autoplay={
                {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            }
            
            modules={[Autoplay]}
            className="mySwiper"
                 >
            {products.map(category => 
            <SwiperSlide key={category.id}>
             <Link to={`/${category.id}`}  className='tech-wrapper'>
                        <img src={category.images[2]} alt="" />
                        <h3>{category.title}</h3>
                        <p>${category.price}</p>
              </Link>
              </SwiperSlide>
            )}
            </Swiper>
        </div>
    );
};

export default Tech;
