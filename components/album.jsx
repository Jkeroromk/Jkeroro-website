import Image from 'next/image'
import React from 'react'

const Album = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <Image
        src='/Room.jpg'
        alt='album'
        width={550}
        height={400}
        className='rounded-3xl mb-8'
        />
        <Image
        src='/lego-car.jpg'
        alt='album'
        width={550}
        height={400}
        className='rounded-3xl mb-8'
        />
        <Image
        src='/coffee.jpg'
        alt='album'
        width={550}
        height={400}
        className='rounded-3xl mb-8'
        />
    </div>
  )
}

export default Album