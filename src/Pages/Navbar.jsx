import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context';

const Navbar = () => {
    const {theme,ToggleDarkMode} = useTheme();
    const ToggleMode = ()=>{
        ToggleDarkMode();
    }

    console.log("theme",theme);
  return (
    <div>
        <nav className={`link-container ${theme}`}>
            <div className='main-link'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button onClick={ToggleMode}>{theme==="light" ? "Dark" : "Light" } Mode</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar