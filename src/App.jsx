import { useEffect } from 'react';
import './App.scss';
import { apiInstance } from './api/api';
import Routes from './routes/Routes';
import { Container } from './utils/Utils';
import Footer from './components/footer/Footer.jsx';
import Nav from './components/nav/Nav.jsx';
import Shoes from './components/Products/Shoes.jsx';
import Ebay from './components/ebay/Ebay.jsx';
import Tech from './components/tech/Tech.jsx';
import Homepage from './components/homepage/Homepage.jsx';


function App() {
  useEffect(()=>{
    apiInstance("/products")
      .then(response => console.log(response))
  },[])
  return (
    <div className="App">
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}


export default App;
