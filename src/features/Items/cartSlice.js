import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [] //initial state of the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //Reducer to add item in the cart
    addToCart: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, imgUrl, price) {
        return {
          payload: {
            id: nanoid(),
            title,
            imgUrl,
            price
          }
        }
      }
    },
    //Reducer to remove item from the cart 
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer