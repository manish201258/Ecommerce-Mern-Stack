import React from 'react'

const Navbar = () => {
  return (
    <>
<nav class="navbar">

  <div><h2 className="fs-1">Logo</h2></div>

  <div className='d-flex justify-content-around w-100'>
  <div class="nav-left d-flex align-items-center gap-4">
  <i class="fas fa-bars menu-icon"></i>
      <div className='d-flex align-items-center gap-2'>
      <select class="category-dropdown">
      <option>All Category</option>
      <option>Electronics</option>
      <option>Fashion</option>
      <option>Books</option>
    </select>
    <div class="search-container">
      <input type="text" placeholder="Search this blog" />
      <button><i class="fas fa-search"></i></button>
    </div>
      </div>
   
  </div>

  <div class="nav-right d-flex align-items-center gap-5">
    <select className="language-dropdown">
      <option  value="en">🇬🇧 English</option>
      <option  value="hi">🇮🇳 Hindi</option>
    </select>
    {/* <div>
    <i class="fas fa-shopping-cart"></i>
    <span>Cart</span>
    </div> */}
    <div className='d-flex gap-1'>
    {/* <i class="fas fa-user"></i> */}
    <button className='btn btn-secondary btn-sm border border-0'>Register</button>
    <button className='btn btn-dark btn-sm '>Login</button>
    </div>

  </div>

  </div>
 
</nav>


    </>
  )
}

export default Navbar