/* eslint-disable no-unused-vars */
import axios from '../../utils/axios';
import {loadInfo} from '../reducers/tvSlice'
export {removeInfo} from '../reducers/tvSlice'

export const ansyncLoadtv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
    const videos = await axios.get(`/tv/${id}/videos`);
    
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
