import Link from 'next/link';
import React from 'react';
import Emoji from '../Emoji/Emoji';
import Toggle from '../Toggle/Toggle';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo} href="/">
            <span>Fran's Dev Term Definer </span>
          </a>
        </Link>
        <div>
          <Link href="/termsubmit">
            <a className={styles.emojilink} href="/termsubmit">
              <Emoji symbol="🚀 ⚛️ 🧗🏾‍♂️ 🤓" label="submit a term" size="2.1rem" />
            </a>
          </Link>
        </div>
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
