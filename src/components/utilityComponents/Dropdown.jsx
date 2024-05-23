/* eslint-disable react/prop-types */

const Dropdown = ({title , options,func}) => {
  return (
    <div className="relative flex w-80 h-12 mt-3 bg-zinc-900 overflow-hidden rounded-md mx-2">
  <select onChange={func} defaultValue="0" name="format" id="format" className="appearance-none outline-none bg-transparent flex-1 px-2 text-white cursor-pointer text-base font-sans">
    <option className="text-black" value='0' >
      {title}
    </option>
    {options.map((o,i)=>{
        return(
            <option className="text-black" key={i} value={o} >
        {o.toUpperCase()}
      </option>
        )
    })}
  </select>
  <div className="absolute top-0 right-0 px-4 bg-zinc-900 cursor-pointer pointer-events-none transition-all duration-250">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white mt-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.707 14.121l4.95-4.95a1 1 0 000-1.414l-.707-.707a1 1 0 00-1.414 0l-3.828 3.828-3.828-3.828a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>
  )
}

export default Dropdown