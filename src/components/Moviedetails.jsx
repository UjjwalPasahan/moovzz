import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { ansyncLoadMovie, removeInfo } from "../store/actions/movieActions";
import Loading from "./Loading";
import noImage from '../assets/images.jpeg';

const Moviedetails = () => {
  const navigate = useNavigate();
  const { movieInfo } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ansyncLoadMovie(id));
    return () => {
      dispatch(removeInfo());
    };
  }, [dispatch, id]);

  return movieInfo ? (
    <div className="overflow-x-hidden h-screen w-screen bg-[#2a2a2a] p-5" style={{ background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)) , url(https://image.tmdb.org/t/p/original/${movieInfo.details.backdrop_path})`, backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <nav className="text-zinc-300 text-md flex justify-around items-center w-1/3">
        <i className="hover:text-[#8B78E6] text-2xl ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        <a href={movieInfo.details.homepage} target="_blank" rel="noopener noreferrer"><i className="ri-earth-fill"></i></a>
        <a href={`https://www.imdb.com/title/${movieInfo.externalId.imdb_id}/`} target="_blank" rel="noopener noreferrer"><i className="ri-link-m"></i></a>
        <a href={`https://www.wikidata.org/wiki/${movieInfo.externalId.wikidata_id}`} target="_blank" rel="noopener noreferrer">imdb</a>
      </nav>

      <div className="flex w-full text-white justify-between items-start">
        <div className="px-20 py-10">
          <img className="w-[36vw] h-[65vh] rounded-sm" src={`https://image.tmdb.org/t/p/original/${movieInfo.details.poster_path}`} alt="" />
        </div>
        <div className="py-10 px-20 w-full">
          <h1 className="flex items-end text-4xl font-bold">{movieInfo.details.title || movieInfo.details.name || movieInfo.details.original_name || movieInfo.details.original_title} <small className="text-zinc-400 text-xs">({movieInfo.details.original_language})</small></h1>
          <div>
            <div className="w-[50%] flex justify-between items-center">
              <p className="font-semibold my-5"><i className="bg-[#8B78E6] p-1 rounded-lg">{`${movieInfo.details.vote_average}/10`}</i> Rating</p>
              <p className="font-semibold my-5"><i className="bg-[#8B78E6] p-1 rounded-lg">{`${movieInfo.details.runtime} min`}</i></p>
            </div>
            <p>Genres: {movieInfo.details.genres.map((m) => m.name)}</p>
            <p className="text-xl font-bold">{movieInfo.details.tagline}</p>
          </div>
          <p className="w-[40vw] mb-5">{movieInfo.details.overview}</p>
          <Link to="trailer" className="mb-5 px-5 py-3 font-semibold rounded-md text-white bg-[#8B78E6]"><i className="mr-2 ri-play-fill"></i>Watch Trailer</Link>

          {movieInfo.watchProvider && movieInfo.watchProvider.buy && (
            <div className="mt-5">
              <h4>Available to Buy</h4>
              <div className="flex gap-5 mt-1">
                {movieInfo.watchProvider.buy.map((m, i) => (
                  <img key={i} className="h-10 w-10" src={`https://image.tmdb.org/t/p/original${m.logo_path}`} alt="" />
                ))}
              </div>
            </div>
          )}

          {movieInfo.watchProvider && movieInfo.watchProvider.flatrate && (
            <div className="mt-5">
              <h4>Available on FlatRate</h4>
              <div className="flex gap-5 mt-1">
                {movieInfo.watchProvider.flatrate.map((m, i) => (
                  <img key={i} className="h-10 w-10" src={`https://image.tmdb.org/t/p/original${m.logo_path}`} alt="" />
                ))}
              </div>
            </div>
          )}

          {movieInfo.watchProvider && movieInfo.watchProvider.rent && (
            <div className="mt-5">
              <h4>Available to Rent</h4>
              <div className="flex gap-5 mt-1">
                {movieInfo.watchProvider.rent.map((m, i) => (
                  <img key={i} className="h-10 w-10" src={`https://image.tmdb.org/t/p/original${m.logo_path}`} alt="" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-10 py-16">
        <h4 className="text-white font-semibold text-2xl">Recommended or Similar Stuff</h4>
        <div className="max-w-screen mx-auto gap-8 p-4 overflow-x-auto flex overflow-y-hidden">
          {(movieInfo.similar && movieInfo.similar.map((d, i) => (
            <div key={i} className="bg-zinc-800 w-52 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
              <Link to={`/movie/details/${d.id}`}>
              <div className={`relative h-24 bg-cover bg-center rounded-t-lg w-44 h-[45vh] `} style={{ backgroundImage:`url(${d.backdrop_path?`https://image.tmdb.org/t/p/original/${ d.backdrop_path}`: noImage})` }}></div>
                <div className="p-2">
                  <div className="text-white text-lg font-semibold">
                    {d.original_name || d.original_title || d.name || d.title}
                  </div>
                </div>
              </Link>
            </div>
          ))) ||
          (movieInfo.recommendations && movieInfo.recommendations.map((d, i) => (
            <div key={i} className="bg-zinc-800 w-52 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
              <Link to={`/movie/details/${d.id}`}>
                <div className="relative h-24 bg-cover bg-center rounded-t-lg w-48 h-[45vh]" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${d.backdrop_path && d.backdrop_path})` }}></div>
                <div className="p-2">
                  <div className="text-white text-lg font-semibold">
                    {d.original_name || d.original_title || d.name || d.title}
                  </div>
                </div>
              </Link>
            </div>
          ))) ||
          <h1>No data to Show</h1>}
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
