import { Link } from "react-router-dom"

const Sidenav = () => {
  return (
    <div className="text-[#8B78E6] text-xl w-[20%] h-screen border-r-[0.5px] border-zinc-600 p-10">
         <i className=" ri-movie-2-fill"></i> <span className="font-extrabold">MOOVZZ</span>
            <nav className="flex flex-col mt-5 ">
                <Link to='/trending' className=" text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-fire-fill"></i>Trendy</Link>
                <Link to='/popular' className=" text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-bard-fill"></i>Popular</Link>
                <Link to='/movie' className=" text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-movie-line"></i>Movies</Link>
                <Link to='/tv' className=" text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-tv-line"></i>Tv Shows</Link>
                <Link to='/person' className=" text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-team-fill"></i>People</Link>
            </nav>

            <nav className="flex flex-col mt-1 border-t-[0.5px] border-zinc-600">
                <h1 className="my-3 font-bold">Website Information</h1>
                <Link to={'/about'} className="text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-information-fill"></i>About Us</Link>
                <Link to={'/contact'} className="text-zinc-400 text-xl p-5 hover:bg-[#8B78E6] hover:text-white duration-300 rounded-lg "><i className="mr-3 ri-phone-fill"></i>Contact Us</Link>
            </nav>
    </div>
  )
}

export default Sidenav