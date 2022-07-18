import { configureStore } from '@reduxjs/toolkit'


//reducers
import stateReducer from './features/state/state-slice'



export const store =  configureStore({
  //there is non "combine()" just an object of reducers 
  reducer:{
        stateValue:stateReducer
    },
})


