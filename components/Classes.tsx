'use client';

import React from 'react';
import styles from './Classes.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import CustomButton from './CustomButton';

const classes = [
  {
    name: 'body building',
    img: '/assets/img/classes/cardio.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae sapiente maxime eum quae aspernatur ',
  },
  {
    name: 'cardio',
    img: '/assets/img/classes/bodybuilding.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae sapiente maxime eum quae aspernatur ',
  },
  {
    name: 'fitness',
    img: '/assets/img/classes/fitness.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae sapiente maxime eum quae aspernatur  ',
  },
  {
    name: 'crossfit',
    img: '/assets/img/classes/crossfit.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae sapiente maxime eum quae aspernatur  ',
  },
];

const Classes = () => {
  return (
    <section id='class'>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className={styles.classesGrid}
      >
        {classes.map((item, index) => {
          return (
            <div key={index} className={styles.classesImageContainer}>
              {/* overlay */}
              <div className={styles.classesOverlay}></div>
              <Image
                src={item.img}
                fill
                className={styles.classesImage}
                alt=''
              />
              {/* Text & Btn */}
              <div className={styles.classesTextContainer}>
                <motion.h3
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='h3 text-accent'
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className={styles.classesDescription}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles='w-[164px] h-[46px]'
                    text='Read More'
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
