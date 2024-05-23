import axios from "../../utils/axios"
import {  useEffect, useState } from "react"
import { Link } from "react-router-dom"
import noImage from "../../assets/images.jpeg"

const Topnav = () => {
    const [searched, setsearched] = useState("")
    const [searchedData, setsearchedData] = useState([])

    const getSearches = async () => {
        try {
            const d = await axios.get(`/search/multi?query=${searched}`)
            setsearchedData(d.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSearches()
    },[searched])
    

    return (
        <div className="z-[999] relative w-full h-[10vh] text-white flex justify-start items-center pl-10 gap-10">
            <i className="ri-search-2-line"></i>
            <input onChange={(e) => setsearched(e.target.value)} value={searched} placeholder="Type that you want to watch ..." type="text" className="p-3 w-1/3 bg-transparent border-[0.5px] rounded-xl border-zinc-600 outline-none" />
            {searched !== "" && <i className="ri-close-large-fill cursor-pointer" onClick={() => setsearched("")}></i>}
            <div className="overflow-auto rounded-lg absolute top-[100%] bg-zinc-900 max-h-[40vh] flex flex-col w-[30vw]">
                {
                     
                    searchedData.map((m,id)=><Link to={`${m.media_type === "movie"
                    ? `/movie/details/${m.id}`
                    : m.media_type === "tv"
                    ? `/tv/details/${m.id}`
                    : `/person/details/${m.id}`}`} key={id} className="border-b-[0.5px] border-zinc-300 text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 flex items-center gap-5"><img src={m.backdrop_path || m.profile_path?`https://image.tmdb.org/t/p/original/${m.backdrop_path || m.profile_path}`:noImage} className="mr-3 ri-fire-fill h-[10vh] w-[10vh] object-cover rounded-lg" ></img>{m.original_name || m.original_title || m.title || m.name}</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Topnav