
import React, { useState, useEffect } from 'react';
import './Shoes.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoArrowForwardOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setShoes(data);
      } catch (error) {
        console.error('Error fetching shoes:', error);
      }
    };

    fetchShoes();
  }, []);

  console.log(shoes)

  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={7}
    autoplay={
        {
            delay: 2500,
            disableOnInteraction: false,
        }
    }
    
    modules={[Autoplay]}
    className="mySwiper"
>
    {shoes.map(category => 
        <SwiperSlide key={category.id}>
            <Link  to={`/${category.id}`} className='shoes-wrapper' >
                <img className='shoes-list'  src={category.images[0]} alt={category.name} />
                <p className='shoes-title'>{category.title}</p>
                {
                    console.log(category.images[0])
                }
            </Link>
        </SwiperSlide>
    )}
    <div className="text">
    <p>Score these trending kicks</p>
    <p>See all <IoArrowForwardOutline/> </p>
    </div>
</Swiper>

    // <div style={{ overflow: 'scroll', height: '400px' }}>
    //   {shoes.map((shoe) => (
    //     <div key={shoe.id}>
    //       <img src={shoe.image} alt={shoe.name} />
    //       <p>{shoe.name}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Shoes;
