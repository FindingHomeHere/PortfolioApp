import React from 'react';
import Link from 'next/link';

import styles from './Hero.module.css';
const Hero = () => {
  return (
    <>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <h2 className={styles['hero-heading']}>
            Designer || Developer
          </h2>
          <p className={styles['hero-text']}>
            Creating a beautiful space for you to show off
            who your brand is!
          </p>
          <Link href="/about">
            <button className={styles['hero-btn']}>
              Find out more!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
