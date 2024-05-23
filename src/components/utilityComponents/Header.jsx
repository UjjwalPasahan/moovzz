/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom"

function Header({data}) {
    const overview = data.overview?data.overview.slice(0,150):''

  return (
    <div className="h-[50vh] p-10 flex flex-col items-baseline justify-end" style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)) , url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path})`,backgroundPosition:'center',backgroundSize:"cover"}}>
        <h1 className="w-[70%] mb-3 text-white font-bold text-4xl ">{data.title || data.name || data.original_name || data.original_title}</h1>
        <p className="w-[70%] mb-3 text-white font-bold text-sm w-1/2">{`${overview}... `}<Link to={`${data.media_type}/details/${data.id}`} className="text-blue-500">Read More</Link></p>
        <p className="text-white font-bold text-sm">{data.release_date}</p>
        <p className="text-white font-bold text-xs font-extralight">{data.media_type&&data.media_type.toLowerCase()==="movie"?<i className="mr-1 ri-movie-2-line"></i>:<i className="mr-1 ri-tv-line"></i>}{data.media_type}</p>
        
        {data.adult && <div className="bg-[#8B78E6] h-10 w-10 text-white rounded-full text-center flex items-center justify-center"><p>18+</p></div> }

        <Link to={`${data.media_type}/details/${data.id}/trailer`} className="bg-[#8B78E6] px-10 py-3 mt-2 rounded-lg font-bold text-white">Watch Trailer</Link>
        <Outlet />
    </div>
  )
}

export default Header