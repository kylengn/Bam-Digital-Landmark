import React from "react";
import Lamp from "../img/lamp.jpg";

const Residences = () => {
  return (
    <div className='bg-primary w-screen h-screen lg:pt-40'>
      {/* Residences on Desktop */}
      <div className='container mx-auto lg:flex flex-col lg:flex-row justify-center items-center hidden'>
        <div
          className='flex-1'
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <img src={Lamp} alt='Lamp' />
        </div>
        <div
          className='flex-1 text-white uppercase flex flex-col items-center justify-center space-y-4'
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <p className='tracking-extraWide text-xs'>Refined</p>
          <h1 className='font-thin tracking-wide text-7xl'>Residences</h1>
          <p className='text-secondary font-semibold tracking-extraWide text-xs'>
            Discover the residences
          </p>
          <a href='/virtual-tours' className=''>
            <div className='bg-virtualTour bg-no-repeat bg-cover bg-center w-80 h-48 flex items-end justify-center'>
              <span className='text-secondary uppercase tracking-widest font-semibold text-xs pb-4'>
                Tour Display Suites ►
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Residences on Mobile */}
      <div
        className='bg-residences bg-no-repeat bg-contain bg-top w-screen h-screen lg:hidden'
        data-aos='fade-left'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'
        data-aos-once='false'
      >
        <div className='text-white flex flex-col justify-center items-center uppercase transform scale-75 py-12'>
          <p className='tracking-extraWide text-xs'>Refined</p>
          <h1 className='font-thin tracking-wide text-7xl'>Residences</h1>
          <button className='text-secondary py-4 px-6 w-80 text-xs uppercase tracking-widest font-semibold border-2 border-opacity-30 mt-10'>
            Discover the residences
          </button>
          <button className='text-secondary py-4 px-6 w-80 text-xs uppercase tracking-widest font-semibold border-2 border-opacity-30 mt-5'>
            Tour display suites ►
          </button>
        </div>
      </div>
    </div>
  );
};

export default Residences;
