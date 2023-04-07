import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { RiMenu3Line, RiCloseFill } from "react-icons/ri"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

	return (
		<div className="navbar">
			<div className="navContainer">
			<div className="navKiri">
				<Link className="logo" to="/">
				<h2>Daffa Blog</h2>
				</Link>
			</div>
          <div className="menuBtn">
          {!menuOpen ? (
            <RiMenu3Line size={24} onClick={menuToggleHandler} />
          ) : (
            <RiCloseFill size={24} onClick={menuToggleHandler} />
          )}
          </div>
			<div className={`${"navKanan"} ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""}`}>
			  <ul className="navlink">
			    <li>
			       <NavLink
			       to='/'
			  style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>
			  <span>HeadLine</span>
			      </NavLink>
			    </li>    
			    <li>
			       <NavLink
			       to='/article'
			  style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>
			  <span>Blog Posts</span>
			      </NavLink>
			    </li>
			    <li>
			       <NavLink
			       to='/studio'
			  style={isActive => ({
			    color: isActive ? "#fff" : "#fcd933"
			  })} onClick={() => setMenuOpen(false)}>
			  <span>Studio</span>
			      </NavLink>
			    </li>    
			  </ul>
			</div>
			</div>
		</div>
		)
}