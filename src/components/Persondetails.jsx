/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncLoadperson } from "../store/actions/personActions.js";
import { removeInfo } from "../store/actions/personActions.js";
import Loading from "./Loading";
import noImage from '../assets/images.jpeg'

const Persondetails =  () => {
  const navigate = useNavigate();

  const {personInfo} = useSelector((state) => state.person);
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removeInfo());
    };
  }, [dispatch, id]);
  
  
  return personInfo ? (
    <div className="h-screen w-screen p-10">
              <nav className="text-zinc-300 text-md flex justify-around items-center w-1/3">
        <i className="  hover:text-[#8B78E6] text-2xl ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
         </nav>

         <div className="flex w-full text-white justify-between items-start">
        <div className="px-20 py-10 " >
          <img className="w-[36vw] h-[65vh] rounded-sm" src={`https://image.tmdb.org/t/p/original/${personInfo.details.profile_path}`} alt="" />
        </div>
        {/* <div className="py-10 px-20 w-full">
          <h1 className="flex items-end text-4xl font-bold">{tvInfo.details.title || tvInfo.details.name || tvInfo.details.original_name || tvInfo.details.original_title} <small className="text-zinc-400 text-xs">({tvInfo.details.original_language
          })</small> </h1> */}

          <div >
            {/* <p className="font-semibold my-5"> <i className="bg-[#8B78E6] p-1 rounded-lg">{`${tvInfo.details.vote_average}/10`}</i> Rating </p> */}
            
            {/* <p>Genres: {tvInfo.details.genres.map((m) => m.name)}</p> */}
            <p className="text-xl font-bold">{personInfo.details.birthday}</p>
          </div>

          <p className="w-[40vw] mb-9"></p>


</div>
    </div>
    
  ):(<Loading />)
};

export default Persondetails;
