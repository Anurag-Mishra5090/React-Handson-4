import React from 'react'
import { useNavigate } from 'react-router-dom'

import './AddStudent.css'

const AddStudent = () => {
const navigate = useNavigate()
const goback = () => {
navigate('/student')
}
  return (
    <>
    <div className='studentaddclass'>
<form >
            <label >Name :</label>
            <br />
            <input type="text" name="name" ></input>
            <br />
            <label>Age :</label>
            <br />
            <input type="text" name="age" ></input>
            <br />
            <label>Course :</label>
            <br />
            <input type="number" name="course" ></input>
            <br />
            <label>Batch :</label>
            <br />
            <input type="number" name="batch" ></input>
            <br />
            <button onClick={goback} className='button-cancel' >Cancel</button>
            <button className='button-submit' >Submit</button>
          </form>
          </div>
    </>
  )
}

export default AddStudent