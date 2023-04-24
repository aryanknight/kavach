import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{
        userInfo:JSON.parse(localStorage.getItem("kavach-user"))||null
    },
    reducers:{
        update:(state,action)=>{
            localStorage.setItem("kavach-user",JSON.stringify(action.payload));
            state.userInfo=action.payload
        }
    }
});

export const {update}=userSlice.actions;
export default userSlice.reducer;