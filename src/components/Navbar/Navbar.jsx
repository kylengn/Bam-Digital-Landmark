import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import Logo from "../../img/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    textAlign: "center",
    transition: "top 0.5s",
  };

  return (
    <nav
      style={{ ...navbarStyles, top: visible ? "0" : "-120px" }}
      className='flex justify-between items-center bg-black bg-opacity-50 bg-transparent inset-0 w-screen h-28 z-10 px-4 md:px-12'
    >
      <div className='transform scale-75 transition duration-700 ease-out md:scale-100'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='px-10 py-3 md:border-l-2 border-opacity-50'>
        <div id='main-menu-trigger' className='main-menu-trigger'>
          <span className='menu-icon'>
            <span className='line top'></span>
            <span className='line middle'></span>
            <span className='line bottom'></span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
