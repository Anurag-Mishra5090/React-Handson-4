
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './Student.css'



const Student = () => {
         const navigate = useNavigate();
    
        
         const addstu = () => {
     navigate('/addstudent')
         }
  return (
    <div>
 <button className='btnadd' onClick={addstu}>Add New Student</button>
 <table border={2}>
     <thead>
         <tr>
             <td >Name</td>
             <td>Age</td>
             <td>Course</td>
             <td>Batch</td>
             <td>Change</td>
         </tr>
     </thead> 
     <tbody>
         
     <tr>
             <td >Alok</td>
             <td>32</td>
             <td>B.tech</td>
             <td>2018</td>
             <td>
             <Link to='/editstudent' >Edit</Link>  
             </td>
         </tr>    
         <tr>
             <td >Abhi</td>
             <td>32</td>
             <td>B.tech</td>
             <td>2018</td>
             <td>
             <Link to='/editstudent' >Edit</Link>  
             </td>
         </tr>              
          
     </tbody>
 </table>
    </div>
  )
}

export default Student

