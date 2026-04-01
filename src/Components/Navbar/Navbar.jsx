import React from 'react';


const Navbar = ({cartItem}) => {
    return (
        <div className='container mx-auto sticky top-0 z-50 '>
        <div className="navbar bg-base-100 shadow-sm  flex justify-between">
  <div className="flex">
    <a className="text-xl sm:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className='hidden sm:flex items-center'>
    <ul className='flex gap-3 text-xl'>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  </div>
  
  <div className="flex  gap-1 sm:gap-3">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item text-amber-500 text-xl text-bold">{cartItem.length}</span>
        </div>
      </div>
      
    </div>
    <div><button className='btn hidden sm:flex'>Log in</button></div>
    <div className="dropdown dropdown-end">
      <div>
        <div className="">
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;