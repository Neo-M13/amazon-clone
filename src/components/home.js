import React from 'react';
import './home.css';
import Products from './Products'


const home = () => {
  return (
    <div className="home">
      <div className="home_container">
         <img className="home_image"
         src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" 
         alt="Hero image" 
         />
         <Products />
      </div>
    </div>
  )
}

export default home;