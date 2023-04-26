import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ name }) => {
  
  // using useDispatch hooks for calling the function 
  const dispatch=useDispatch();

  // Greeting will be dispalyed according to the time zone 
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);
  

  // function will be called when user click on save button 
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
     
    if(habitName === ""){
      alert("Please Enter yout Habit");
      return;
    }

    dispatch(addHabit(habitName));
    toast.success("Your habit added successfully");
    document.getElementById("habitName").value="";
  }


  return (
    <>
      <div className="navbar">
        <h3>
          {/* acording to time its shows morning,afternoon,evening and night */}
          {hour <= 12 ? "Good Morning" : hour <= 17 ? "Good Afternoon" : hour <= 21 ? "Good Evening" : "Good Night"}
        </h3>
    
        <div className="right-nav">
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Add Habits
          </button>

        </div>
      </div>

      {/* The form will be pop up when user click on add habit button  */}
      {/* here i am using modals for adding the form  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
           
            <div className="modal-header">
               <h5 className="modal-title" id="staticBackdropLabel">  Add New Habit  </h5>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> Habit NAME </label>
              
              {/* Getting the User Habit  */}
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter Your Habit...."
                  autoComplete="off"
                />
              </div>
         </div>


            <div className="modal-footer">
              {/* creating an cancel button */}
              <button
                type="button"
                className="btn btn-info"
                data-bs-dismiss="modal"
                >

                Cancel
              </button>

              {/* creating save button  */}
              <button type="button" className="btn btn-success" onClick={handleSave}>
                Save
              </button>
           
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Navbar;
