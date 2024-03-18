
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Navber = ({ setSearch }) => {

  const { user, logOut } = useContext(AuthContext)

  const handelLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const navItems = <>
    <li><Link>Home</Link></li>
    <li><Link>Recommendation</Link></li>
    <li><Link>trending</Link></li>
    {
      user?.email ? ""
        : <> <li><Link to="/login">Login</Link></li>
          <li><Link to='/signup'>Registration</Link></li>
        </>
    }
  </>
  return (
    <div className="navbar bg-stone-200 rounded-lg">
      <div className="">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-200 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl mr-20">Music Tracks</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          <div className='ml-28'>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="input input-bordered w-24 md:w-auto" />
          </div>
        </ul>
      </div>
      {user?.email ?
       <>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-stone-200">
              <li>
                <a className="justify-between">
                  Profile
                  
                </a>
              </li>

              <li><a onClick={handelLogout} >Logout</a></li>
            </ul>
          </div>
        </div>
      </>:""

     
      }
    </div >
  );
};

export default Navber;