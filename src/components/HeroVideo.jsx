import React from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

const getUrlFromId = ref => {
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/6yhgxq01/production/${id}.${extension}`
}

const HeroVideo = ({block}) => {
  console.log(block);
  return (
    <>
      <section className='w-full h-screen flex items-center content-center justify-center after:content[""] after:w-full after:h-full after:bg-dark/[.5] after:absolute before:content-["Development"] before:absolute before:text-white before:z-20'>
        <div className='w-[1140px] realtive z-10'>
          <h1 className='font-poppins text-[17px] text-white max-w-[40%]'>{block.tagline}</h1>
          <h2 className='font-poppins text-[50px] text-white max-w-[50%] font-bold mb-[10px]'>{block.heading}</h2>
          <p className='font-poppins text-[17px] text-white max-w-[40%] my-[20px]'>{block.brodtext}</p>
          <p className='font-poppins text-dark bg-pink inline-block py-[8px] pl-[20px] pr-[75px] rounded-full cursor-pointer'>Work with us</p>
        </div>

        <div className='w-full h-full absolute overflow-hidden block'>
          <video src={getUrlFromId(block.video.asset._ref)} loop muted playsInline autoPlay className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'></video>
        </div>
      </section>
    </>
  )
}

export default HeroVideo