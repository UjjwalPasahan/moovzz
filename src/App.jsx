import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './index.css';
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import TvPage from "./components/TvPage";
import Movies from "./components/Movies";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";
import Abouts from "./components/Abouts";
import ContactUs from "./components/ContactUs";
import Trailer from "./components/Trailer";
import Notfound from "./components/Notfound";

function App() {
  document.title = "MOOVZZ";
  return (
    <div className="bg-[#2a2a2a] h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvPage />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/:id" element={<Persondetails />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
