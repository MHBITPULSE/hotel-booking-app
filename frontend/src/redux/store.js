import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './roomSlice'
import userReducer from './userSlice'

export default configureStore({
      reducer: {
            room: roomReducer,
            user: userReducer
      }
})