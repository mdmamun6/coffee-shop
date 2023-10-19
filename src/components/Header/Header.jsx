import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {

  // const { user, logOut, loading } = useContext(AuthContext);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false); 
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false); 

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => console.log('You are successfully logged out'))
  //     .catch(error => console.error(error));
  // }

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  }

  const toggleDesktopDropdown = () => {
    setShowDesktopDropdown(!showDesktopDropdown);
  }

  const navlinks = (
    <>
      <li><NavLink className='bg-white font-medium text-black uppercase' to='/' exact activeClassName='border-b border-primary'>Home</NavLink></li>
      {/* {user && (
        <div className='md:flex block'>
          <li><NavLink className='bg-white font-medium text-black uppercase' to='/addnewproduct'>Add Product</NavLink></li>
          <li><NavLink className='bg-white font-medium text-black uppercase' to='/cart'>My Cart</NavLink></li>
        </div>
      )} */}
      <li><NavLink className='bg-white font-medium text-black uppercase' to='/contact'>Contact Us</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar py-4 bg-white mx-auto w-[90%]">
        <div className="navbar-start justify-between md:justify-normal md:w-[33.33%] w-[66.66%]" >
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <Link to='/' className="font-bold  text-primary uppercase md:text-3xl text-2xl">Snikeed</Link>
        </div>
        <div className="navbar-center md:w-[33.33%] hidden lg:flex" >
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end w-[33.33%] justify-end" >
          {/* {user ? (
            <>
              <div className='md:hidden'>
                <span onClick={toggleMobileDropdown}>
                  <img className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="" />
                </span>
                {showMobileDropdown && (
                  <div className="absolute right-5 top-4 z-10 mt-12 bg-white rounded-md shadow-lg">
                    <div className="text-left bg-white px-4 py-4 rounded-md">
                      <div>{user?.displayName}</div>
                      <div>{user?.email}</div>
                      <button className="block btn btn-primary text-white w-full text-center mt-2 px-4 py-2 text-sm" onClick={handleLogOut}>Sign Out</button>
                    </div>
                  </div>
                )}
              </div>
              <div className='text-right hidden md:flex items-center gap-2'>
                <div onClick={toggleDesktopDropdown}>
                  {user?.displayName}<br />
                  {user?.email}
                </div>
                {showDesktopDropdown && (
                  <div className="absolute top-7 p-6 bg-white right-20 mt-12 rounded-md shadow-lg">
                    <div className="text-left bg-white px-4 py-2 rounded-md">
                      <button className="block btn btn-primary text-white w-full text-center mt-2 px-4 py-2 text-sm" onClick={handleLogOut}>Sign Out</button>
                    </div>
                  </div>
                )}
                <span onClick={toggleDesktopDropdown}>
                  <img className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="" />
                </span>
              </div>
            </>
          ) : (
            <>
              <Link className='btn ml-4 md:btn-md btn-sm text-white btn-primary' to='/login'>Log In</Link>
            </>
          )} */}
        </div>
      </div>
    </div>
  )
}
