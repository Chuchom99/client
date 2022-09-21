import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/chuchom/image/upload/v1663171026/Pink_and_Purple_Modern_Cryptocurrency_Your_Story_if2pas.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/chuchom/image/upload/v1663171026/Pink_and_Purple_Modern_Cryptocurrency_Your_Story_if2pas.png"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/chuchom/image/upload/v1663171026/Pink_and_Purple_Modern_Cryptocurrency_Your_Story_if2pas.png"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;