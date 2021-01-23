import React from 'react';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import styles from './Navbar.module.css';

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className={styles['navbar-container']}>
        <div className={styles['navbar-wrapper']}>
          <div className={styles['navbar-logo']}>
            <Link href="/">
              <a className={styles['logo-title']}>
                Isaac Johnson
              </a>
            </Link>
          </div>
          <div className={styles['nav-menu']}>
            <button
              onClick={toggle}
              className={styles['open-menu']}
            >
              <IoMenu className={styles['menu-icon']} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
