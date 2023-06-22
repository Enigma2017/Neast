import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/global.css';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.logoMenu}>
            <Link to='/' className={styles.logoLink}>
              <p className={styles.logo1}>Neast</p>
              <p className={styles.logo2}>only pro's!</p>
            </Link>
          </div>
          <div className={styles.navMenu}>
            <nav>
              <ul className={styles.navItems}>
                <li>
                  <Link to='/about' className={styles.linkHeaderItem}>
                    about us
                  </Link>
                </li>
                <li>
                  <Link to='/freelances' className={styles.linkHeaderItem}>
                    freelances
                  </Link>
                </li>
                <li>
                  <Link to='/skills' className={styles.linkHeaderItem}>
                    skills
                  </Link>
                </li>
                <li>
                  <Link to='/blog' className={styles.linkHeaderItem}>
                    blog
                  </Link>
                </li>
                <li>
                  <Link to='/prices' className={styles.linkHeaderItem}>
                    prices
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className={styles.linkHeaderItem}>
                    contact us
                  </Link>
                </li>
                <li>
                  <Link to='/profile' className={styles.linkHeaderItem}>
                    my profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div> 
        </div>
        <div className={styles.btnRegister}>
          <Link to='/register' className={styles.navBtn}>create profile</Link>
        </div>
      </div>
    </header>
  
  );
};
    
export default Navbar;