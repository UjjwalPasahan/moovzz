import giphy from '../assets/giphy.webp'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-[#030303]'>
        <img src={giphy} alt="" />
    </div>
  )
}

export default Loading