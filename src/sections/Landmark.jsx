import { auto } from "async";
import React from "react";

const Landmark = () => {
  return (
    <section id='landmark' className='bg-primary w-screen h-96'>
      <div className='flex flex-col items-center w-screen h-96 justify-center uppercase font-thin'>
        <h3
          className='text-secondary tracking-extraWide text-xs pb-12'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          A Landmark
        </h3>
        <h1
          className='text-7xl md:text-9xl text-white tracking-life'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          Life
        </h1>
      </div>
    </section>
  );
};

export default Landmark;
