import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../slices/tasksSlice";
import {useDispatch} from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const [validated, setValidated] = useState(false); // for valiadation alerts

    const addTask = (e) => {

      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
       setValidated(true);

       if(title.length === 0 || description.length === 0 ){
        e.preventDefault()
        console.log("Please enter fields")
       }else{
        e.preventDefault()
        console.log({title,description})

        dispatch(addTaskToList({title,description}))
        setTitle('')
        setDescription('')
        setValidated(false);
       }
      }
  return (
    <section className="my-5">
    <Form noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Title" value={title} required
         onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description" value={description} required
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          Add Task
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;