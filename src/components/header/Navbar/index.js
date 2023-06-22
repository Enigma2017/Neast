import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/global.css';
import styles from './Navbar.module.css';

const Navbar = () => {
  const LinkStyle = {
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const LinkStyleItem = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#000000',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: '400'
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.logoMenu}>
            <Link to='/' style={LinkStyle}>
              <p className={styles.logo1}>Neast</p>
              <p className={styles.logo2}>only pro's!</p>
            </Link>
          </div>
          <div className={styles.navMenu}>
            <nav>
              <ul className={styles.navItems}>
                <li>
                  <Link to='/about' style={LinkStyleItem}>
                    about us
                  </Link>
                </li>
                <li>
                  <Link to='/freelances' style={LinkStyleItem}>
                    freelances
                  </Link>
                </li>
                <li>
                  <Link to='/skills' style={LinkStyleItem}>
                    skills
                  </Link>
                </li>
                <li>
                  <Link to='/blog' style={LinkStyleItem}>
                    blog
                  </Link>
                </li>
                <li>
                  <Link to='/prices' style={LinkStyleItem}>
                    prices
                  </Link>
                </li>
                <li>
                  <Link to='/contact' style={LinkStyleItem}>
                    contact us
                  </Link>
                </li>
                <li>
                  <Link to='/profile' style={LinkStyleItem}>
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