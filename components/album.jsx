'use client'

import Image from 'next/image'
import React from 'react'

const Album = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 '>
        <Image
        src='/Room.jpg'
        alt='album' 
        width={550}
        height={400}
        className='rounded-2xl scale-90 sm:scale-100 sm:mb-5'
        />
        <Image
        src='/lego-car.jpg'
        alt='album'
        width={550}
        height={400}
        className='rounded-2xl scale-90 sm:scale-100 sm:mb-5'
        />
        <Image
        src='/coffee.jpg'
        alt='album'
        width={550}
        height={400}
        className='rounded-2xl scale-90 sm:scale-100 sm:mb-5'
        />
    </div>
  )
}

export default Album