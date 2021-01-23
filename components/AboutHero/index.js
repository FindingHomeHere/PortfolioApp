import React from 'react';
import Link from 'next/link';

import styles from './AboutHero.module.css';
const Hero = () => {
  return (
    <>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <h1 className={styles['hero-heading']}>
            Get Started
          </h1>
          <p className={styles['hero-text']}>
            Read about the process below, or get a quote
            now!
          </p>
          <Link href="/contact">
            <button className={styles['hero-btn']}>
              Get a quote!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
