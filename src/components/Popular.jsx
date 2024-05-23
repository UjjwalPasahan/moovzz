import { useNavigate } from "react-router-dom";
import Topnav from "./utilityComponents/Topnav";
import Dropdown from "./utilityComponents/Dropdown.jsx";
import { useEffect, useState } from "react";
import axios from "../utils/axios.js";
import Loading from "./Loading.jsx";
import HorizontalCards from "./utilityComponents/HorizontalCards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();
  const [popular, setpopular] = useState([]);
  const [category, setCategory] = useState('movie');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title="MOOVZZ | Popular "+category;


  const getPopular = async (pageToLoad) => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${pageToLoad}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setpopular(prevpopular => [...prevpopular, ...data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setpopular([]);
    setPage(1);
    setHasMore(true);
    getPopular(1);
  }, [category]);

  const fetchMoreData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      getPopular(nextPage);
      setPage(nextPage);
    }
  };

  return popular ? (
    <div className="p-[5%] min-h-screen max-w-screen">
      <div className="font-semibold text-zinc-300 text-2xl flex items-center justify-start">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <h1>Popular</h1>
      </div>
      <div className="flex items-center justify-around p-5">
        <Topnav />
        <div className="flex items-center justify-around">
          <Dropdown title="Category" options={['tv', 'movie']} func={(e) => setCategory(e.target.value)} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <InfiniteScroll
          hasMore={hasMore}
          loader={<h1 className="text-white">Loading...</h1>}
          dataLength={popular.length}
          next={fetchMoreData}
        >
          <HorizontalCards title={category} mdata={popular} classes={"overflow-y-auto flex flex-wrap overflow-x-hidden"} imgClasses={"w-full h-[45vh]"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
