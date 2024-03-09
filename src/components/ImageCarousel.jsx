import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}> 
      {images.map((image, index) => (
        <div key={index} className=' relative z-0 max-h-[250px] lg:max-h-[550px]'>
          <img src={image} alt={`Slide ${index + 1}`} 
          className='max-h-[250px] lg:max-h-[500px] w-auto block object-contain mx-auto'/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
