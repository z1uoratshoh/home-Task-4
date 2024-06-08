import { configureStore } from '@reduxjs/toolkit'
import cardSlice from '../reducer/cardSlice/cardSlice'

export const store = configureStore({
  reducer: {
    card : cardSlice 
  },
})