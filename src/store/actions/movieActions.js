/* eslint-disable no-unused-vars */
import axios from '../../utils/axios';
import {loadInfo} from '../reducers/movieSlice'
export {removeInfo} from '../reducers/movieSlice'

export const ansyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);
    const videos = await axios.get(`/movie/${id}/videos`);
    
    const theUltimateDetails = {
      details: details.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      watchProvider: watchProvider.data.results.IN,
      videos: videos.data.results.find(m=>m.type == 'Trailer'),
    };
    
    dispatch(loadInfo(theUltimateDetails))
  } catch (error) {
    console.log(error);
  }
};
