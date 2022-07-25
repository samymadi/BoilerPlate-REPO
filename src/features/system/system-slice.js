import {createSlice} from '@reduxjs/toolkit';
import { reset } from 'nodemon';


const type={
    ERROR:"ERROR",
    WARNING:"WARNING",
    INFO:"INFO"
}


const initialState = {
    errMessage:undefined,
    errType:undefined,
    loading:false,
}



//create slice for every reducer
const systemSlice = createSlice({
    name:"System",
    initialState,
    //dont need to return the new state just update the variable
    reducers:{
        //errors and infos
        triggerError(state,payload){
                Object.assign(state,payload)
                state.errType=type.ERROR
        },
        triggerWarning(state,payload){
                Object.assign(state,payload)
                state.errType=type.WARNING
        },
        triggerInfo(state,payload){
                Object.assign(state,payload)
                state.errType=type.INFO
        },
        reset(state){
            state=initialState;
        },

        //loadings
        startLoading(state){
            state.loading=true;
        },

        stopLoading(state){
            state.loading=false;
        }



    }
})

export const {
            reset,
            triggerError,
            triggerWarning,
            triggerInfo,
            startLoading,
            stopLoading 
        } = systemSlice.actions;

//return the slice reducer 
export default systemSlice.reducer