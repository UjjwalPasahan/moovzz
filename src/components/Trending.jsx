import { useNavigate } from "react-router-dom";
import Topnav from "./utilityComponents/Topnav";
import Dropdown from "./utilityComponents/Dropdown.jsx";
import { useEffect, useState } from "react";
import axios from "../utils/axios.js";
import Loading from "./Loading.jsx";
import HorizontalCards from "./utilityComponents/HorizontalCards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

  const navigate = useNavigate();
  const [trendings, setTrendings] = useState([]);
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('week');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title="MOOVZZ | Trending "+category;

  const getTrending = async (pageToLoad) => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${pageToLoad}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setTrendings(prevTrendings => [...prevTrendings, ...data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTrendings([]);
    setPage(1);
    setHasMore(true);
    getTrending(1);
  }, [category, duration]);

  const fetchMoreData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      getTrending(nextPage);
      setPage(nextPage);
    }
  };

  return trendings ? (
    <div className="p-[5%] min-h-screen max-w-screen">
      <div className="font-semibold text-zinc-300 text-2xl flex items-center justify-start">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <h1>Trending</h1>
      </div>
      <div className="flex items-center justify-around p-5">
        <Topnav />
        <div className="flex items-center justify-around">
          <Dropdown title="Category" options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
          <Dropdown title="Duration" options={['day', 'week']} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <InfiniteScroll
          hasMore={hasMore}
          loader={<h1 className="text-white">Loading...</h1>}
          dataLength={trendings.length}
          next={fetchMoreData}
        >
          <HorizontalCards title={category} mdata={trendings} classes={"overflow-y-auto flex flex-wrap overflow-x-hidden"} imgClasses={"w-full h-[45vh]"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
