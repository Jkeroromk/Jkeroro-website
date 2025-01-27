import Image from 'next/image';
import React from 'react';

const Album = () => {
  const images = [
    { src: '/Room.jpg', alt: 'Room' },
    { src: '/lego-car.jpg', alt: 'Lego Car' },
    { src: '/coffee.jpg', alt: 'Coffee' },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={550}
          height={400}
          className="rounded-2xl scale-90 sm:scale-100 sm:mb-5"
          priority={index === 0} // Preload the first image
        />
      ))}
    </div>
  );
};

export default Album;
