import React from 'react';
import HabitList from './HabitList';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar name="Detail View"/>
      <HabitList/>
    </>
  )
}

export default Home;
