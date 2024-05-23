/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tvInfo: null,
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    loadInfo:(state,action)=>{
      state.tvInfo = action.payload;
    },
    removeInfo:(state,action)=>{
      state.tvInfo=null
    }
    },
})

export const { loadInfo , removeInfo } = tvSlice.actions

export default tvSlice.reducer
