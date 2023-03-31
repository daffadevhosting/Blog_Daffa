import react from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


const NavBar = () => (



<nav className="nav nav--left js-nav">
  <ul>
    <li>
       <NavLink
       to='/'
  style={isActive => ({
    color: isActive ? "#fff" : "#fcd933"
  })}><span>HeadLine</span>
      </NavLink>
    </li>    
    <li>
       <NavLink
       to='/blog'
  style={isActive => ({
    color: isActive ? "#fff" : "#fcd933"
  })}><span>Blog Posts</span>
      </NavLink>
    </li>
    <li>
       <NavLink
       to='/marketPlace'
  style={isActive => ({
    color: isActive ? "#fff" : "#fcd933"
  })}><span>MarketPleace</span>
      </NavLink>
    </li>    
  </ul>
</nav>
);

export default NavBar;
