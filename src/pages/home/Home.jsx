import React from 'react'
import Navbar from '../../layout/nav/Navbar'
import Shoes from '../../components/Products/Shoes'
import Ebay from '../../components/ebay/Ebay'
import Tech from '../../components/tech/Tech'
import Footer from '../../components/footer/Footer'
import Homepage from '../../components/homepage/Homepage'
import Nav from '../../components/nav/Nav'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Nav/>
        <Homepage/>
        <Shoes/>
        <Ebay/>
        <Tech/>
        <Footer/>
    </div>
  )
}

export default Home