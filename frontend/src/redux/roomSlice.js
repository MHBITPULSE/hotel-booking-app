import { createSlice } from '@reduxjs/toolkit'

export const roomSlice = createSlice({
      name: 'room',
      initialState: {
            rooms: null
      },
      reducers: {
            updateRooms: (state, action) => {
                  // Redux Toolkit allows us to write "mutating" logic in reducers. It
                  // doesn't actually mutate the state because it uses the immer library,
                  // which detects changes to a "draft state" and produces a brand new
                  // immutable state based off those changes
                  state.rooms = action.payload
            },
            decrement: state => {
                  state.value -= 1
            },
            incrementByAmount: (state, action) => {
                  state.value += action.payload
            }
      }
})

export const { updateRooms } = roomSlice.actions

export const selectRooms = state => state.room.rooms

export default roomSlice.reducer