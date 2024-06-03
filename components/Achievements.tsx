'use client';
import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { motion, useInView } from 'framer-motion';
import styles from './Achievements.module.css';
const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: 'training courses',
  },
  {
    number: 879,
    icon: FaClock,
    text: 'working hours',
  },
  {
    number: 150,
    icon: ImUsers,
    text: 'happy customers',
  },
  {
    number: 9,
    icon: FaTrophy,
    text: 'international awards',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  //animation
  const statsContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 0.5,
        ease: 'linear',
      },
    },
  };

  const statsItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
  return (
    <section>
      <div className={styles.achievementsSection}>
        <motion.div
          variants={statsContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.achievementsGrid}
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                variants={statsItem}
                className={styles.achievementsContainer}
                key={index}
              >
                {/* circle outer */}
                <div
                  className={`${styles.achievementsWrapper} border-accent/90`}
                >
                  {/* circle inner & count number */}
                  <div
                    ref={ref}
                    className={`${styles.achievementsCount} border-accent/30`}
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                {/* Text */}
                <div className={styles.achievementsTextWrapper}>
                  <item.icon className={styles.achievementsIcon} />
                  <h4 className='h4'>{item.text}</h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
