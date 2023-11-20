import React, { useEffect, useState } from 'react';
import Navbar from '../../layout/nav/Navbar';
import Nav from '../../components/nav/Nav';
import { apiInstance } from '../../api/api';

const SinglePage = ({ selectedProduct }) => {
  const [id, setId] = useState(window.location.pathname);
  const [productData, setProductData] = useState([]);



  useEffect(() => {
    apiInstance(`/products${id}`).then((response) => setProductData(response.data));
  },[])
  console.log(productData);
  return (
    <div>
      <Navbar />
      <Nav />
      <img src={productData?.images?.[0]} alt="" width={500} height={500}/>
      <h2>{productData?.title}</h2>
      <p>{productData?.description}</p>
      <p>${productData?.price}</p>
      {/* Render other product details */}
    </div>
  );
};

export default SinglePage;
