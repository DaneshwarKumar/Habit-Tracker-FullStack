import React from 'react'
import Habit from './AddHabit'
import { useSelector } from "react-redux";

const HabitList = () => {

  //  getting  the state from reducer
  let habitsState=useSelector((state)=>state["habits"]);
  
  return (
    <div className='habits'>
      {/* rendering all the habits  */}
      {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default HabitList;
