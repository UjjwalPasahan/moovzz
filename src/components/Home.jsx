import axios from "../utils/axios";
import Loading from "./Loading";
import Dropdown from "./utilityComponents/Dropdown";
import Header from "./utilityComponents/Header"
import HorizontalCards from "./utilityComponents/HorizontalCards";
import Sidenav from "./utilityComponents/Sidenav"
import Topnav from "./utilityComponents/Topnav"
import { useCallback, useEffect, useState } from "react";

function Home() {
  const [wallpaper, setwallpaper] = useState("")
  const [trendings, settrendings] = useState([])
  const [category, setcategory] = useState('all')

  const getWallpaper = useCallback(async () => {
    try {
      const d = await axios.get(`trending/all/week`)
      setwallpaper(d.data.results[Math.floor(Math.random() * d.data.results.length)])
    } catch (error) {
      console.log(error)
    }
  }
    , [])

  const getTrending = async () => {
    try {
      const d = await axios.get(`trending/${category}/week`)
      settrendings(d.data.results)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    !wallpaper && getWallpaper()
    getTrending()
  }, [category])
  return wallpaper && trendings ? (
    <>
      <div className="flex">
        <Sidenav />
        <div className="w-[80%]">
          <Topnav />
          <Header data={wallpaper} />
          <div className="flex items-center justify-between  pr-20">
            <h1 className="px-5 pt-5 text-zinc-400 font-bold text-2xl">Trending</h1>
            <Dropdown title="Filter" options={['tv', 'movies', 'all']} func={(e)=>setcategory(e.target.value)} />
          </div>
            
          <HorizontalCards title={category} mdata={trendings} classes={"overflow-x-auto flex overflow-y-hidden"} imgClasses={"w-44 h-[45vh]"}/>
            
          </div>
      </div>
    </>
  ) : (<Loading />)
}

export default Home