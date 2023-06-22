import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChooseHome.module.css';


const ChooseHome = () => {

    return (
      <section className={styles.chooseHome}>
        <div className={styles.container}>
            <p className={styles.chooseText}>
                We are the special network of top technology and design talent, ready to tackle your most important initiatives.
            </p>
          <div  className={styles.flex}>
            <div className={styles.chooseHomeItem}>
                <h2>Developers</h2>
                <p>
                    Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
                </p>
                <Link to='/developers' className={styles.chooseLink}>view</Link>
            </div>
            <div className={styles.chooseHomeItem}>
                <h2>Designers</h2>
                <p>
                    Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
                </p>
                <Link to='/designers' className={styles.chooseLink}>view</Link>
            </div>
            <div className={styles.chooseHomeItem}>
                <h2>Project Managers</h2>
                <p>
                    Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.
                </p>
                <Link to='/project-managers' className={styles.chooseLink}>view</Link>
            </div>
            <div className={styles.chooseHomeItem}>
                <h2>Product Managers</h2>
                <p>
                    Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.
                </p>
                <Link to='/product-managers' className={styles.chooseLink}>view</Link>
            </div>
          </div>
          <p className={styles.chooseTextBelow}>
            We offer flexible engagements from hourly to full-time.
          </p>
        </div>
      </section>
    );
  };
      
  export default ChooseHome;