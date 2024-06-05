'use client';
import Image from 'next/image';
import Link from 'next/link';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import CustomButton from './CustomButton';
import { motion } from 'framer-motion';

// variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: 'linear',
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className='container mx-auto pb-24 xl:grid-cols-4 '>
        <motion.div
          variants={footerContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.footerGrid}
        >
          {/* info */}
          <motion.div variants={footerItem} className={styles.footerLink}>
            <Link href='#'>
              <Image
                src={'/assets/img/logo.png'}
                width={117}
                height={55}
                alt=''
              />
            </Link>
            <p className={styles.footerText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              voluptas labore cum
            </p>
            <ul className={styles.footerAddress}>
              <li className={styles.footerAddressLink}>
                <FaMapMarkerAlt className='text-xl text-accent' />
                <span>Lincoln Park Chicalgo, Illinois</span>
              </li>
              <li className={styles.footerAddressLink}>
                <FaPhoneAlt className='text-xl text-accent' />
                <span>(510) 710-3464 (510) 640-6326</span>
              </li>
              <li>
                <Link className={styles.footerAddressLink} href='#'>
                  <FaEnvelope className='text-xl text-accent' />
                  <span>sayhello@email.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem} className={styles.footerLink}>
            <h4 className='h4 text-accent mb-4'>Recent Blog posts</h4>
            {/* post */}
            <div className={styles.footerBlogPostsContainer}>
              <Link href='#'>
                <h5 className='hover:text-accent transition-all h5 leading-snug text-gray-300'>
                  How to stay motivated for all exercises
                </h5>
                <p className={styles.footerDate}>September 22, 2024 </p>
              </Link>
            </div>
            <div className={styles.footerBlogPostsContainer}>
              <Link href='#'>
                <h5 className='hover:text-accent transition-allh5 leading-snug text-gray-300'>
                  How to stay motivated for all exercises
                </h5>
                <p className={styles.footerDate}>September 22, 2024 </p>
              </Link>
            </div>
            <div className={styles.footerBlogPostsContainerLast}>
              <Link href='#'>
                <h5 className='hover:text-accent transition-all h5 leading-snug text-gray-300'>
                  How to stay motivated for all exercises
                </h5>
                <p className={styles.footerDate}>September 22, 2024 </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItem} className={styles.footerLink}>
            <h4 className='h4 text-accent mb-4'>Gallery</h4>
            {/* gallery imgs */}
            <div className={styles.footerGalleryContainer}>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/david.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/matt.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/rosy.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/sofia.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/rosy.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/david.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
              <Link href='#'>
                <Image
                  src={'/assets/img/trainers/matt.jpg'}
                  width={100}
                  height={100}
                  alt=''
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div variants={footerItem} className={styles.footerLink}>
            <h4 className='h4 text-accent mb-4'>Newsletter</h4>
            <div className='flex flex-col gap-4'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                assumenda doloremque quae nostrum labore debitis. Libero
                suscipit numquam facilis. Maxime vel dolore aut nihil at nisi,
                iste dicta officia assumenda.
              </p>
              <form className='flex items-center'>
                <input
                  type='text'
                  placeholder='Your email address'
                  className='h-[50px] outline-none px-4 text-primary-300'
                />

                <CustomButton containerStyles='h-[50px] px-8' text='Send' />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className='text-white border-t border-white/20 py-12'>
        <div className='container mx-auto h-full'>
          <div className='flex items-center justify-between h-full'>
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className='flex gap-4 text-xl'>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-accent transition-all'
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-accent transition-all'
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-accent transition-all'
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
