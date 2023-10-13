import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
      name: 'user',
      initialState: {
            token: null,
            user: null
      },
      reducers: {
            updateUser: (state, action) => {
                  // Redux Toolkit allows us to write "mutating" logic in reducers. It
                  // doesn't actually mutate the state because it uses the immer library,
                  // which detects changes to a "draft state" and produces a brand new
                  // immutable state based off those changes
                  state.token = localStorage.getItem('token')
                  state.user = action.payload
            },
            removeUser: state => {
                  state.user = null
            },
            incrementByAmount: (state, action) => {
                  state.value += action.payload
            }
      }
})

export const { updateUser, removeUser } = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer