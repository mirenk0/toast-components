import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="">
          TJR Practice
        </a>
      </p>
      <p>© 2024-present.</p>
    </footer>
  );
}

export default Footer;
