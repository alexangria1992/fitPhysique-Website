import React from 'react';
import styles from './CustomButton.module.css';
const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      className={`${containerStyles} ${styles.heroButton} group bg-accent `}
    >
      <span
        className={`${styles.heroButtonSpan} ease     
      -translate-x-20 rotate-45 bg-black transition-all duration-300
      group-hover:-translate-y-32
   `}
      ></span>
      <span className={styles.heroButtonSpanText}>{text}</span>
    </button>
  );
};

export default CustomButton;
