import Link from 'next/link';
import React from 'react';
import Toggle from '../Toggle/Toggle';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a href="/">
            <span>Fran's Modern Dev Term Definer 🚀 ⚛️ 🧗🏾‍♂️ 🤓</span>
          </a>
        </Link>
        <Link href="/Blog">
          <a className={styles.blog} href="/Blog">
            Headless Bloggin'
          </a>
        </Link>
        <div className={styles.toggle}>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
