/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieInfo: null,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadInfo:(state,action)=>{
      state.movieInfo = action.payload;
    },
    removeInfo:(state,action)=>{
      state.movieInfo=null
    }
    },
})

export const { loadInfo , removeInfo } = movieSlice.actions

export default movieSlice.reducer
