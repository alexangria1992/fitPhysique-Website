'use client';

import styles from './HeroSlider.module.css';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// components
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const HeroSlider = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className={styles.heroSlideSwiperSlide}>
          <div className={styles.heroSlideContainer}>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.heroSliderHeader} h1`}
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className={styles.heroSliderText}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              esse quas perferendis deserunt illum unde
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text='Get started'
                containerStyles='w-[196px] h-[62px] '
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.heroSlideSwiperSlide}>
          <div className={styles.heroSlideContainer}>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.heroSliderHeader} h1`}
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className={styles.heroSliderText}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              esse quas perferendis deserunt illum unde
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text='Get started'
                containerStyles='w-[196px] h-[62px] '
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      {/*  swiper nav buttons */}
      <SwiperNavButtons
        containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px]
        z-50 flex justify-center lg:justify-start gap-1'
        btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center
        items-center hover:bg-accent transition-all duration-300'
        iconsStyles='text-2xl'
      />
    </Swiper>
  );
};

export default HeroSlider;
