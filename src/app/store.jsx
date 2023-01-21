import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/CardSlice'
import cartReducer from '../features/CartSlice'

export const store = configureStore({
  reducer: {
    card: cardReducer,
    cart: cartReducer,
  },
})