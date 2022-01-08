import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, userName: "" }  //Initial state
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //Reducer function to add user name and update login status
    addUser(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn
      state.userName = action.payload.userName
    },

    //Reducer function to remove user name and update login status to default
    logout(state) {
      state.isLoggedIn = false
      state.userName = ""
    }

  }
})

export const { addUser, logout } = userSlice.actions

export default userSlice.reducer