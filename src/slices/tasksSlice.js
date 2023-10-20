import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{}
}

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState, // ES6 feature--->ie:initialState:initialState
    reducers: {
         //add action
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
         //remove action
        removeTaskFromList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
         //modify action
        updateTaskInList:(state,action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
         //set action
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
             //here selectedTask state was modified
        }

    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer