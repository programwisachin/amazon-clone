import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/Items/itemSlice'
import cartReducer from '../features/Items/cartSlice'
import userReducer from '../features/Items/userSlice'

//Redux store
export const store = configureStore({
  //List of reducers in redux store
  reducer: {
    item:itemReducer,
    cart:cartReducer,
    user:userReducer
  },
});
