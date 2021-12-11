import React from "react";
import "./MenuBg.css";
import Magnum from "../../img/magnum.png";
import Asia from "../../img/asia-standard.png";

const MenuBg = () => {
  return (
    <div id='menu-bg' className='menu-bg invisible'>
      <div className='absolute inset-0 bg-black opacity-80'>
        <ul className='font-thin text-white text-opacity-80 text-xl flex flex-col w-full h-screen justify-center px-12 space-y-3'>
          <li>
            <a href='/' className='border-b-2 pb-1'>
              Home
            </a>
          </li>
          <li className='pb-1'>
            <a
              href='#'
              id='2'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Only One Robson
            </a>
          </li>
          <li>
            <a
              href='#'
              id='3'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              270° Views
            </a>
          </li>
          <li>
            <a
              href='#'
              id='4'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Refined Residences
            </a>
          </li>
          <li>
            <a
              href='#'
              id='5'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Display Suites Tours
            </a>
          </li>
          <li>
            <a
              href='#'
              id='6'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Club Robson, Lifestyle <br /> Concierge Services
            </a>
          </li>
          <li>
            <a
              href='#'
              id='7'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Award-Winning Team
            </a>
          </li>
          <li>
            <a
              href='#'
              id='8'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Media
            </a>
          </li>
          <li>
            <a
              href='#'
              id='9'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-700 pb-1 select-none'
            >
              Register
            </a>
          </li>
          <li>
            <a
              href='#'
              id='10'
              className='border-b-2 border-transparent hover:border-current hover:trasition ease-in-out duration-500 pb-1 select-none'
            >
              Contact
            </a>
          </li>
        </ul>

        <div className='flex flex-col md:flex-row bottom-5 absolute justify-between w-screen pr-12 pl-4 md:pl-0'>
          <div className='flex justify-between w-full items-center flex-wrap min-h-5/6 '>
            <div className='pl-5 md:pl-12'>
              <a
                href='https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329423,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536'
                target='_blank'
                className='text-secondary uppercase tracking-widest text-xs'
              >
                1400 Robson St. Vancouver, BC
              </a>
              <div className='flex justify-start items-center font-extralight'>
                <div className='text-secondary uppercase tracking-widest text-xs'>
                  604 566 2288<span className='pr-1'> | </span>
                </div>

                <a
                  href='mailto:info@landmarkonrobson.com'
                  className='text-secondary uppercase tracking-widest text-xs'
                >
                  info@landmarkonrobson.com
                </a>
              </div>
            </div>
          </div>

          <div className='flex justify-start items-center space-x-5 pl-5 pt-2'>
            <a href='http://www.asiastandardamericas.com/' target='_blank'>
              <img src={Asia} alt='Asia Standard Americas' width={73} />
            </a>
            <a href='http://magnumprojects.ca/' target='_blank'>
              <img src={Magnum} alt='Magnum Projects Ltd' width={85} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBg;

// after:content-[''] after:w-0 after:transition after:duration-600 after:ease after:absolute after:left-0 after:-bottom-1.5 after:bg-transparent
