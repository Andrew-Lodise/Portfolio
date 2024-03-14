import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}
    className='w-full h-full bg-teal-300 flex'> 
      {images.map((image, index) => (
        <div key={index} className='w-full h-full bg-white'>
          {/*<img src={image} alt={`Slide ${index + 1}`} 
          className='bg-pink-900 w-[10px] relative'/>*/}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
