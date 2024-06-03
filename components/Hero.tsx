import React from 'react';
import styles from './Hero.module.css';
import HeroSlider from './HeroSlider';
const Hero = () => {
  return (
    <section id='home' className={`${styles.heroSection} bg-hero `}>
      <div className={styles.heroContainer}>
        {/* Slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
