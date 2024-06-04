'use client';

import React from 'react';
import styles from './About.module.css';
import { FaUsers } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Achievements from './Achievements';

const featured = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque fuga provident quisquam totam dolor accusantium voluptatibus maxime ex odit? Tenetur quam eius ',
  },
  {
    icon: <IoIosPricetags />,
    title: 'excellent prices',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque fuga provident quisquam totam dolor accusantium voluptatibus maxime ex odit? Tenetur quam eius ',
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipment',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque fuga provident quisquam totam dolor accusantium voluptatibus maxime ex odit? Tenetur quam ',
  },
];

const About = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutWrapper}>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='h2 text-center'
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.aboutText}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iusto
            tempore dolor iure corporis magnam.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.featuredItems}
        >
          {featured.map((feature, index) => {
            return (
              <div className={styles.featuredItemsWrapper} key={index}>
                <div className={`${styles.featureIcon} `}>{feature.icon}</div>
                <div className={styles.featuredItemsText}>
                  <h4 className='h4 text-accent'>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* Achievements */}
        <motion.div
          variants={fadeIn('up', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
