import React from "react"
import {useSelector} from "react-redux";

 function Navbar(){
    
    //here useSelector is use for only read the state of the store.
    //.tasks is keyname ,used in store.js  here the both names must same..!
    const {tasksList,error}= useSelector((state)=> state.tasks)

    return(
        <>
         <h1 className="text-center my-4 text-primary">Project Management</h1>
         <p className="text-center lead">{`Currently ${tasksList.length} tasks pendings`}</p>
         {
             (error !== "") ? <h5 className="text-center text-danger">{error}</h5> : null
         }
        </>
    )
 }
 export default Navbar;