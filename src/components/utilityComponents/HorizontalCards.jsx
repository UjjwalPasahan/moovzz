/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom"


// const HorizontalCards = ({mdata,classes,imgClasses,title}) => {
//   return (
    
// <>

// <div className={`max-w-screen mx-auto gap-8 p-4 ${classes}`}>
//    {
//     mdata.map((d,i)=>{
//         return(
//         <div key={i} className="bg-zinc-800 w-52 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
//           <Link to={`${title}/details/${d.id}`}>
            
//         <div className={`relative h-24  bg-cover bg-center rounded-t-lg ${imgClasses}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path})` }}>
//         </div>
//         <div className="p-2">
//           <div className="text-white text-lg font-semibold ">{d.original_name || d.original_title || d.name || d.title} </div>
//           <div className="text-white text-base mb-2">
//             {`${d.overview.substring(0,50)}...`} 
//           </div>
//         </div>
//       </Link>
//       </div>
//       )
//     })
//    }
   
//     </div>
// </>
//   )
// }

// export default HorizontalCards



import { Link } from "react-router-dom";
import noImage from "../../assets/images.jpeg"

const HorizontalCards = ({ mdata, classes, imgClasses,title}) => {
  return (
    <div className={`max-w-screen mx-auto gap-8 p-4 ${classes}`}>
      {mdata.map((d, i) => (
        <div key={i} className="bg-zinc-800 w-52 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
          <Link to={`${title === "tv"
                    ? `/tv/details/${d.id}`
                    : `/movie/details/${d.id}`}`}>
            <div className={`relative h-24 bg-cover bg-center rounded-t-lg ${imgClasses}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path?d.poster_path || d.backdrop_path:noImage})` }}></div>
            <div className="p-2">
              <div className="text-white text-lg font-semibold">
                {d.original_name || d.original_title || d.name || d.title}
              </div>
              <div className="text-white text-base mb-2">
                {`${d.overview.substring(0, 50)}...`}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
