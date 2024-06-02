'use client';

import React from 'react';
import styles from './MobileNav.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

const links = [
  {
    name: 'home',
    target: 'home',
    offset: -100,
  },
  {
    name: 'about',
    target: 'about',
    offset: -80,
  },
  {
    name: 'class',
    target: 'class',
    offset: -80,
  },
  {
    name: 'team',
    target: 'team',
    offset: 0,
  },
  {
    name: 'prices',
    target: 'prices',
    offset: -40,
  },
  {
    name: 'testimonial',
    target: 'testimonial',
    offset: 0,
  },
  {
    name: 'blog',
    target: 'blog',
    offset: 0,
  },
  {
    name: 'contact',
    target: 'contact',
    offset: 0,
  },
];
const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && 'active'}`}
            key={index}
            className={styles.navLinks}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
