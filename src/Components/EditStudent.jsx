import React from 'react'
import {  useNavigate } from 'react-router-dom'

import './AddStudent.css'

const EditStudent = () => {

  const navigate = useNavigate();
    const back = () => {
navigate('/student')
    }
   
    
    const handleUpdate = (event) =>{
      event.preventDefault();
    
      navigate('/student');
   }
    
    
  return (
    <>
 <div className='studentaddclass'>
<form >
            <label >Name :</label>
            <br />
            <input type="text"  name="name" ></input>
            <br />
            <label>Age :</label>
            <br />
            <input type="text"  name="age" ></input>
            <br />
            <label>Course :</label>
            <br />
            <input type="text"  name="course" ></input>
            <br />
            <label>Batch :</label>
            <br />
            <input type="number"  name="batch" ></input>
            <br />
            <button onClick={back} className='button-cancel' >Cancel</button>
            <button onClick={handleUpdate} className='button-submit' >Update</button>
          </form>
          </div>
    </>

   
  )
}

export default EditStudent