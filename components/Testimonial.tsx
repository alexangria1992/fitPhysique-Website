'use client';

import React from 'react';
import styles from './Testimonial.module.css';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const testimonialData = [
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Maria Garcia',
  },
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.',
    name: 'Maria Garcia',
  },
];

const Testimonial = () => {
  return (
    <section id='testimonial' className={styles.testimonialContainer}>
      <div className='container mx-auto'>
        <motion.h2
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn('up', 0.4)}
          className='h2 text-center'
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn('up', 0.6)}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className='h-[320px]'
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className='h-full' key={index}>
                  <div className={`${styles.testimonialImageContainer}`}>
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=''
                      className={styles.testimonialImage}
                    />
                    <div className={styles.testimonialContent}>
                      <FaQuoteLeft className='text-2xl text-gray-300' />
                      <p className={styles.testimonialMessage}>
                        {person.message}
                      </p>
                      <span className={styles.testimonialName}>
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
