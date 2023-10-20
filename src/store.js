import {configureStore} from "@reduxjs/toolkit"
import tasksReducer from "./slices/tasksSlice"


//store creation:
//when we create store,then we pass the reducer
export const store = configureStore({

    reducer:{
          tasks:tasksReducer
    }
})