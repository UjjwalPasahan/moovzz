import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios.js";
import Loading from "./Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title="MOOVZZ | People";


  const getPeople = async (pageToLoad) => {
    try {
      const { data } = await axios.get(`person/popular?page=${pageToLoad}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setPeople(prevPeople => [...prevPeople, ...data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPeople([]);
    setPage(1);
    setHasMore(true);
    getPeople(1);
  }, []);

  const fetchMoreData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      getPeople(nextPage);
      setPage(nextPage);
    }
  };
  return people ? (
    <div className="p-[5%] min-h-screen max-w-screen">
      <div className="font-semibold text-zinc-300 text-2xl flex items-center justify-start">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <h1 className="flex">People</h1>
      </div>
      
      <div className="flex justify-center items-center">
        <InfiniteScroll
          hasMore={hasMore}
          loader={<h1 className="text-white">Loading...</h1>}
          dataLength={people.length}
          next={fetchMoreData}
        >
          <div className={`max-w-screen mx-auto gap-8 p-4 overflow-y-auto flex flex-wrap overflow-x-hidden`}>
   {
    people.reverse().map((d,i)=>{
        return(<div key={i} className="bg-zinc-800 w-52 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
       <Link to={`/person/${d.id}`}>
       <div className={`relative h-[40vh]  bg-cover bg-center rounded-t-lg w-full`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${d.profile_path})` }}>
        </div>
        <div className="p-2">
          <div className="text-white text-lg font-semibold ">{d.original_name || d.original_title || d.name || d.name} </div>
          
        </div></Link>
      </div>)
    })
   }
   
    </div>  
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
