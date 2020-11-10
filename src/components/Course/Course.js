import React from 'react';
import './Course.css'
import { FiArrowDownCircle} from "react-icons/fi";
import { CgArrowDownR,CgAdd} from "react-icons/cg";
const Course = (props) => {

    const name=props.course.Name;
   
    return (
        

        <div className='course'>
           
           <div className='course'>
          
         

         <h2 className='course-name'>{props.course.sub}</h2>
               
        
       <br/>

       <p>by {props.course.Name}</p>
                
            <p>price : {props.course.price}</p>
                <br />

        
<button onClick={()=>props.AddProduct(props.course)} className='main-button'> <CgAdd size={11}/>Enroll Now</button>

        
         </div>
         </div>
    );
};

export default Course;