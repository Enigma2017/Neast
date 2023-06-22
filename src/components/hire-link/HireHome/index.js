import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HireHome.module.css';

const HireHome = () => {

  return (
    <section className={styles.hireHome}>
      <div className={styles.container}>
        <h1>
            Hire top freelance <br/> 
            specialist from <br/>
            CIS countries
        </h1>
        <div className={styles.btnHire}>
          <Link to='/hire' className={styles.hireBtn}>hire specialist</Link>
        </div>
      </div>
    </section>
  );
};
    
export default HireHome;