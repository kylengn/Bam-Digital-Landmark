import React from "react";

const Hero = () => {
  return (
    <section className='bg-hero bg-no-repeat bg-cover bg-center w-screen h-screen overflow-hidden'>
      <div className=' flex flex-col w-full h-screen text-white justify-center transform transition duration-700 ease-out scale-75 md:scale-100'>
        <div className='heading font-thin mt-20 pl-0 md:pl-12 uppercase'>
          <p
            className='text-xl tracking-widest '
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
          >
            Transforming Vancouver's
          </p>
          <h1
            className='text-8xl'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
          >
            SKYLINE
          </h1>
        </div>
      </div>

      <a
        href='#landmark'
        className='absolute bottom-10 left-4 md:left-12 transform scale-75 transition duration-700 ease-out md:scale-100'
      >
        <div className=''>
          <hr
            className='mb-8 w-12 border-t-2'
            data-aos-anchor='.heading'
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
          />
          <p
            className='text-white text-xs font-light  uppercase tracking-extraWide'
            data-aos='fade-left'
            data-aos-anchor='.heading'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
          >
            Scroll Down
          </p>
          <div
            className='mt-4'
            data-aos='fade-down'
            data-aos-anchor='.heading'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1200'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
          >
            <svg
              className='w-10 h-10 text-white text-opacity-50'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
