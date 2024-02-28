import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className='shadow-md bg-slate-300 flex items-center justify-evenly p-2'>
    <Link to="/">
    <h1 className='font-bold flex flex-wrap text-2xl max-sm:text-sm'>
        <span className='text-slate-500'>Smart</span>
        <span className='text-red-500'>Estate</span>
    </h1>

    </Link>
   
    <form className='flex items-center justify-center space-x-1 bg-white px-4 rounded-full max-sm:w-[120px]'>
        <input type="text" placeholder='Search ...' className="py-2 outline-none rounded-full bg-transparent" />
        <FaSearch />
    </form>
    <ul className="flex space-x-4 items-center justify-center">
        <Link to="/"><li className="max-sm:inline hover:underline cursor-pointer">Home</li></Link>
        <Link to="/about"><li className="max-sm:inline hover:underline cursor-pointer">About</li></Link>
        <Link to="/signIn"><li className="max-sm:inline hover:underline cursor-pointer">Sign In</li></Link>
    </ul>
   </header>
  )
}

export default Header
