import React from "react";
import Condo from "../img/condo.jpg";
import Logo from "../img/logo-white.svg";

const LMOR = () => {
  return (
    <div className='bg-primary w-screen h-screen'>
      <div className='lg:container mx-auto flex flex-col lg:flex-row justify-center items-center cursor-pointer'>
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
          <img src={Condo} alt='Condo' />
        </div>
        <div
          className='flex-1 text-white uppercase flex flex-col items-center justify-center space-y-4 mt-16 lg:mt-0'
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <p className='tracking-extraWide text-xs'>This is</p>
          <img
            src={Logo}
            alt='logo'
            className='scale-50 lg:scale-100 transform transition ease-out duration-500'
          />
          <p className='text-secondary font-semibold tracking-extraWide text-xs'>
            Watch The Film ►
          </p>
        </div>
      </div>
    </div>
  );
};

export default LMOR;
