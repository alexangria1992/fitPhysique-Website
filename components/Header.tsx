'use client';

import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import styles from './Header.module.css';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener('scroll', handleScroll);

    //clear scroll event
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // console.log(headerActive);

  return (
    <header
      className={`${
        headerActive ? styles.activeHeader : styles.inactiveHeader
      } ${styles.headerContainer}`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo */}
        <Link href=''>
          <Image src={'/assets/img/logo.png'} width={117} height={55} alt='' />
        </Link>
        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? 'top-[90px]' : 'top-[124px]'} ${
            openNav
              ? 'max-h-max pt-8 pb-10 border-t border-white/10'
              : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'
          } xl:hidden text-white flex flex-col text-center
         gap-8 fixed bg-primary-200 w-full left-0  transition-all text-base uppercase 
         font-medium`}
        />
        {/* Desktop nav - hidden on small devices */}
        <Nav
          containerStyles=' flex text-white text-base 
        uppercase gap-4 font-medium transition-all hidden xl:flex '
        />

        {/* hide/open menu button */}
        <div className={styles.buttonWrapper}>
          {/* login & register buttons */}
          <div className={styles.authenticationButton}>
            <button className={styles.loginButton}>login</button>
            <button className={styles.registerButton}>register</button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className={styles.mobileNavButton}
          >
            <MdMenu className={styles.mobileMenuIcon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
