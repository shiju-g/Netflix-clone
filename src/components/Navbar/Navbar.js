import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
       <div className = "nav">
           <div className = "nav-brand">
               <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt="" />
           </div>
            <button className ="sign-btn">Sign in</button>
       </div>
    )
}

export default Navbar
