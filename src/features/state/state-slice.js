import {createSlice,PayloadAction} from '@reduxjs/toolkit';




const initialState = {
    state:"sam"
}



//create slice for every reducer
const stateSlice = createSlice({
    name:"state",
    initialState,
    reducers:{
        //dont need to return the new state just update the variable
        toMadi(state,payloadAction){
            state.state=payloadAction.payload;
        },

        toSamy(state){
            state.state= "samy"
        }

    }
})

export const {toMadi,toSamy} = stateSlice.actions;


//return thes slice reducer 
export default stateSlice.reducer