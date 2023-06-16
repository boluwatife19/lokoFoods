import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './page/home/home';
import Menu from './page/menu/menu.';
import Service from './page/service/service';
import Footer from './page/footer/footer';
import Promo from './promo/promo'
import About from './page/about/about';

// import reportWebVitals from './reportWebVitals';
const App = () => {
  return(
    <>
    <Home />
     <Menu />
     <Service />
    <About />
    <Promo />
    <Footer /> 
    </>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 