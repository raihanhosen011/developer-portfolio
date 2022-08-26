import React from 'react'

const Glassmorphism = ({ className = 'absolute inset-x-0 min-h-0 pl-20 pt-24 flex z-[-1]' }) => {
  return (
    <div
      className={`nc-BgGlassmorphism ${className}`}
      data-nc-id="BgGlassmorphism"
    >
      <span className="block bg-[#22577E] absolute right-[74px] top-[10px] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
      <span className="block bg-[#7fafb7] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
    </div>
  )
}

export default Glassmorphism