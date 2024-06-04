'use client';

import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './MembershipSlider.module.css';
//membership data
const membershipData = [
  {
    title: 'Standard',
    price: '30',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities',
      },
      {
        icon: MdClose,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'Health and fintess tips',
      },
      {
        icon: MdClose,
        text: 'Monday-Friday gym access',
      },
      {
        icon: FaCheck,
        text: 'Full access to everything',
      },
      {
        icon: MdClose,
        text: 'No additional amenities',
      },
    ],
  },
  {
    title: 'Professional',
    price: '60',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities',
      },
      {
        icon: FaCheck,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'Health and fintess tips',
      },
      {
        icon: FaCheck,
        text: 'Monday-Friday gym access',
      },
      {
        icon: FaCheck,
        text: 'Full access to everything',
      },
      {
        icon: MdClose,
        text: 'No additional amenities',
      },
    ],
  },
  {
    title: 'Ultimate',
    price: '45',
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities',
      },
      {
        icon: FaCheck,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'Health and fintess tips',
      },
      {
        icon: FaCheck,
        text: 'Monday-Friday gym access',
      },
      {
        icon: FaCheck,
        text: 'Full access to everything',
      },
      {
        icon: FaCheck,
        text: 'No additional amenities',
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
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
      className={styles.swiperContainer}
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles.swiperDescription}>
              <div className={styles.membershipTitle}>
                <h4 className='h4'>{item.title}</h4>
              </div>
              {/* benefitss */}
              <div className={styles.benefitsContainer}>
                <ul className={styles.benefitsList}>
                  {item.benefits.map((item, index) => {
                    return (
                      <li className='flex items-center gap-2' key={index}>
                        <item.icon className={styles.benefitsIcon} />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* Price & Button */}
                <p className='text-accent mb-8 flex gap-1 items-center'>
                  <sup className='text-4xl'>$</sup>
                  <strong className='text-6xl'>{item.price}</strong>
                  <em className='self-end text-2xl'>/month</em>
                </p>
                <CustomButton
                  containerStyles='w-[196px] h-[62px]'
                  text='Buy Now'
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
