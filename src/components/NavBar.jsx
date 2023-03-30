import react from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


const NavBar = () => (



<nav className="nav nav--left js-nav">
  <ul>
    <li>
       <NavLink
      exact='true' to='/blog'
      activelassname="is-active"><span>Blog Posts</span>
      </NavLink>
    </li>
    <li>
       <NavLink
       to='nftDrop'
      activeclassname="is-active"><span>MarketPleace</span>
      </NavLink>
    </li>    
    <li>
       <NavLink
       to='/'
      activeclassname='is-active'><span>HeadLine</span>
      </NavLink>
    </li>    
  </ul>
</nav>
);

export default NavBar;