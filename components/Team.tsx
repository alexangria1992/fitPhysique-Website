'use client';

import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

import styles from './Team.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body builder coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium animi. Impedit nesciunt cum nemo officia nostrum iusto? Sed mollitia vero cupiditate commodi corporis neque voluptatem provident beatae dolorum maiores.',
    social: [
      {
        icon: FaFacebook,
        href: 'http://facebook.com',
      },
      {
        icon: FaTwitter,
        href: 'http://twitter.com',
      },
      {
        icon: FaYoutube,
        href: 'http://youtube.com',
      },
    ],
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Body builder coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium animi. Impedit nesciunt cum nemo officia nostrum iusto? Sed mollitia vero cupiditate commodi corporis neque voluptatem provident beatae dolorum maiores.',
    social: [
      {
        icon: FaFacebook,
        href: 'http://facebook.com',
      },
      {
        icon: FaTwitter,
        href: 'http://twitter.com',
      },
      {
        icon: FaYoutube,
        href: 'http://youtube.com',
      },
    ],
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Body builder coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium animi. Impedit nesciunt cum nemo officia nostrum iusto? Sed mollitia vero cupiditate commodi corporis neque voluptatem provident beatae dolorum maiores.',
    social: [
      {
        icon: FaFacebook,
        href: 'http://facebook.com',
      },
      {
        icon: FaTwitter,
        href: 'http://twitter.com',
      },
      {
        icon: FaYoutube,
        href: 'http://youtube.com',
      },
    ],
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Body builder coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium animi. Impedit nesciunt cum nemo officia nostrum iusto? Sed mollitia vero cupiditate commodi corporis neque voluptatem provident beatae dolorum maiores.',
    social: [
      {
        icon: FaFacebook,
        href: 'http://facebook.com',
      },
      {
        icon: FaTwitter,
        href: 'http://twitter.com',
      },
      {
        icon: FaYoutube,
        href: 'http://youtube.com',
      },
    ],
  },
];

const Team = () => {
  return (
    <section id='team' className={styles.teamContainer}>
      <div className='container x-auto  flex flex-col items-center justify-center'>
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='h2 text-center mb-6'
        >
          Our Trainers
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className={styles.trainersGrid}
        >
          {trainerData.map((trainer, index) => {
            return (
              <div className={styles.trainerWrapper} key={index}>
                {/* Image */}
                <div className={styles.trainerImageContainer}>
                  <Image src={trainer.image} fill alt='' />
                </div>
                {/* Image */}
                <h4 className='h4 mb-2'>{trainer.name}</h4>
                {/* role */}
                <p className={styles.trainerRole}>{trainer.role}</p>
                {/* description */}
                <p className={styles.trainerDescription}>
                  {trainer.description}
                </p>
                {/* socials */}
                <div className={styles.trainerSocialsContainer}>
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link href={social.href} className={styles.trainerlink}>
                          <social.icon className={styles.trainerIcon} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles='w-[196px] h-[62px]'
            text='See all trainers'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
