/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  personInfo: null,
}

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    loadInfo:(state,action)=>{
      state.personInfo = action.payload;
    },
    removeInfo:(state,action)=>{
      state.personInfo=null
    }
    },
})

export const { loadInfo ,removeInfo } = personSlice.actions

export default personSlice.reducer
