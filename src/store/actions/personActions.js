/* eslint-disable no-unused-vars */
import axios from '../../utils/axios';
import { loadInfo } from '../reducers/personSlice';
export {removeInfo} from '../reducers/personSlice'

export const asyncLoadperson = (id) => async (dispatch) => {
  try {
    const details = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    const theUltimateDetails = {
      details:details.data,
      externalId:externalId.data,
      combinedCredits:combinedCredits.data,
      tvCredits:tvCredits.data,
      movieCredits:movieCredits.data,
    };

    dispatch(loadInfo(theUltimateDetails));
  } catch (error) {
    console.error('Error fetching person details:', error);
  }
};

