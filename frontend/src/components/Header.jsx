import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <header className="bg-yellow-300 p-3 ">
       <div className="flex justify-between items-center max-w-6xl mx-auto p-1">
        <Link to='/'>
         <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-zinc-800">Scrap</span>
            <span className="text-slate-500">Uncle</span>
         </h1>
        </Link>
        <form className='bg-slate-100 p-2 ml-2 rounded-lg flex items-center'>
            <input type="text" placeholder="Search" className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <box-icon name='search'></box-icon>
        </form>
        <ul className='flex gap-10'>
          <Link to='/'> <li className='hidden sm:inline text-cyan-700 hover:text-black hover:font-bold nannafont '>Home</li></Link>
           <Link to='/About'>   <li className='hidden sm:inline text-cyan-700 hover:text-black hover:font-bold nannafont'>About</li></Link>
           <Link to='/profile'>
            {currentUser ? (
              <p className="font-bold text-base text-cyan-700 hover:text-black hover:font-bold nannafont"><span>Profile</span></p>
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
       </div>
      </header>
    </>
  )
}

export default Header
