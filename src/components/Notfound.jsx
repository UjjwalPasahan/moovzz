import { useNavigate } from 'react-router-dom'
import notfound from '../assets/notfound.webp'

const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen w-screen flex items-center justify-center'>        <i className="hover:text-[#8B78E6] text-white ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
    <img className='h-96 w-96object-cover' src={notfound} alt="" /></div>
  )
}

export default Notfound