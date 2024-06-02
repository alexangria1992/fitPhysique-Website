import React from 'react';
import Nav from './Nav';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className='container mx-auto'>
        {/* Desktop nav - hidden on small devices */}
        <Nav containerStyles=' flex gap-4 hidden xl:flex' />
      </div>
    </header>
  );
};

export default Header;
