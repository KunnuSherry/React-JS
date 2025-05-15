import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    countValue: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleIncreaseCountAction: (state, action)=>{
            state.countValue+=1;
            console.log(state, action)
        }
    }   //all logics when button is clicked

})

export const {handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer


// state and action contains the following
// Payload means the arguments we passes in counter button function
//Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: {…}, …}[[Handler]]: null[[Target]]: null[[IsRevoked]]: true {type: 'counter/handleIncreaseCountAction', payload: undefined}payload: undefinedtype: "counter/handleIncreaseCountAction"[[Prototype]]: Object