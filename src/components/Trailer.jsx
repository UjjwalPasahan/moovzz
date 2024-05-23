import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Notfound from './Notfound.jsx'
const Trailer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()  
    const category = pathname.includes("movie") ? "movie" : "tv";
    const info = `${category}Info`;
    const ytVideoUri = useSelector((state) => state[category][info]?.videos.key);
    const ytVideo = ytVideoUri;
  return ytVideoUri ? (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black">
        <i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3 text-white absolute top-10 left-10 text-2xl" onClick={() => navigate(-1)}></i>
        <ReactPlayer height={560} width={1080} url={`https://www.youtube.com/watch?v=${ytVideo}`} />
    </div>
  ):(<Notfound/>)
}

export default Trailer