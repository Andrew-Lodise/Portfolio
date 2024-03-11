import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}
    className='w-full flex justify-center h-full'> 
      {images.map((image, index) => (
        <div key={index} className=' relative z-0 h-[350px] md:h-[400] lg:h-[520px]
        w-full flex justify-center '>
          <img src={image} alt={`Slide ${index + 1}`} 
          className='relative w-auto h-auto object-contain'/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
