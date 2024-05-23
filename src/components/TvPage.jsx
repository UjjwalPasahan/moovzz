import { useNavigate } from "react-router-dom";
import Topnav from "./utilityComponents/Topnav";
import { useEffect, useState } from "react";
import axios from "../utils/axios.js";
import Loading from "./Loading.jsx";
import HorizontalCards from "./utilityComponents/HorizontalCards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./utilityComponents/Dropdown.jsx";

const TvPage = () => {
  const navigate = useNavigate();
  const [tvShows, settvShows] = useState([]);
  const [category, setCategory] = useState('popular');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title="MOOVZZ | Tv Shows";

  const gettvShows = async (pageToLoad) => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${pageToLoad}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        settvShows(prevtvShows => [...prevtvShows, ...data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    settvShows([]);
    setPage(1);
    setHasMore(true);
    gettvShows(1);
  }, [category]);

  const fetchMoreData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      gettvShows(nextPage);
      setPage(nextPage);
    }
  };

  return tvShows ? (
    <div className="p-[5%] min-h-screen max-w-screen">
      <div className="font-semibold text-zinc-300 text-2xl flex items-center justify-start">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <h1 className="flex">TvShows {<h4 className="text-xs ml-4 text-zinc-400 flex items-end">{category.toUpperCase()}</h4>}</h1>
      </div>
      <div className="flex items-center justify-around p-5">
        <Topnav />
        <div className="flex items-center justify-around">
          <Dropdown title="Category" options={['popular', 'airing_today', 'on_the_air', 'top_rated']} func={(e) => setCategory(e.target.value)} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <InfiniteScroll
          hasMore={hasMore}
          loader={<h1 className="text-white">Loading...</h1>}
          dataLength={tvShows.length}
          next={fetchMoreData}
        >
          <HorizontalCards title={'tv'} mdata={tvShows} classes={"overflow-y-auto flex flex-wrap overflow-x-hidden"} imgClasses={"w-full h-[45vh]"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default TvPage;
