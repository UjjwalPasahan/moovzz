import { useNavigate } from "react-router-dom";
import Topnav from "./utilityComponents/Topnav";
import { useEffect, useState } from "react";
import axios from "../utils/axios.js";
import Loading from "./Loading.jsx";
import HorizontalCards from "./utilityComponents/HorizontalCards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./utilityComponents/Dropdown.jsx";

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setmovies] = useState([]);
  const [category, setCategory] = useState('top_rated');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title="MOOVZZ | Movies";


  const getmovies = async (pageToLoad) => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${pageToLoad}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setmovies(prevmovies => [...prevmovies, ...data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setmovies([]);
    setPage(1);
    setHasMore(true);
    getmovies(1);
  }, [category]);

  const fetchMoreData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      getmovies(nextPage);
      setPage(nextPage);
    }
  };

  return movies ? (
    <div className="p-[5%] min-h-screen max-w-screen">
      <div className="font-semibold text-zinc-300 text-2xl flex items-center justify-start">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <h1 className="flex">Movies <small className="text-xs ml-4 text-zinc-400 flex items-end">{category.toUpperCase()}</small></h1>
      </div>
      <div className="flex items-center justify-around p-5">
        <Topnav />
        <div className="flex items-center justify-around">
          <Dropdown title="Category" options={['top_rated', 'upcoming', 'now_playing', 'popular']} func={(e) => setCategory(e.target.value)} />
        </div>
        
      </div>
      <div className="flex justify-center items-center">
        <InfiniteScroll
          hasMore={hasMore}
          loader={<h1 className="text-white">Loading...</h1>}
          dataLength={movies.length}
          next={fetchMoreData}
        >
          <HorizontalCards mdata={movies} title={'movie'} classes={"overflow-y-auto flex flex-wrap overflow-x-hidden"} imgClasses={"w-full h-[45vh]"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
