import React from 'react';
import Link from 'next/link';

import styles from './AboutHero.module.css';
const Hero = () => {
  return (
    <>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <h2 className={styles['hero-heading']}>
            Designer || Developer
          </h2>
          <p className={styles['hero-text']}>
            Meticulous Design, Themed for you
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
