import React from 'react';
import Header from '../components/header/Header';
import Hire from '../components/hire-link/Hire';
import ChooseHomeSpecialist from '../components/choose-home/ChooseHome';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hire />
        <ChooseHomeSpecialist />
      </main>
    </div>
  );
};
  
export default Home;