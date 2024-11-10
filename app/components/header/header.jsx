import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoArea}>
        <Link href="/">
        <h1 className={styles.homeTitle}><span className={styles.homeTitle31}>31</span>0<span className={styles.homeTitleOutputs}>outputHub</span></h1>
        </Link>
      </div>
      <div className={styles.navArea}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <span className={styles.nav}>TOP</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className={styles.nav}>ABOUT ME</span>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/310engineer" target="_blank" rel="noopener noreferrer">
              <span className={styles.nav}>X(Twitter)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
