import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}> 
      {images.map((image, index) => (
        <div key={index} className=' relative z-0'>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
