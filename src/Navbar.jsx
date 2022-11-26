import React from 'react';
import useTheme from './ThemeContext';

const Navbar = () => {
  const { windowWidth, colorTheme, setColorTheme } = useTheme();

  return (
    <>
      {windowWidth > 700 ? (
        <nav className="navbar__desktop">
          <h1>Notes</h1>
          <div>
            <button className='darkModeButton' onClick={() => setColorTheme((colorTheme === 'light') ? 'dark' : 'light')}>
              <i className={`fa-solid fa-${(colorTheme === 'light') ? 'moon' : 'sun'}`}></i>
            </button>
            <button className='create'>Create</button>
            <button>Edit Tags</button>
          </div>
        </nav>) : (
        <nav className="navbar__mobile">
          <button onClick={() => setColorTheme((colorTheme === 'light') ? 'dark' : 'light')}>
            <i className={`fa-solid fa-${(colorTheme === 'light') ? 'moon' : 'sun'}`}></i>
            <span>{(colorTheme === 'light') ? 'Dark' : 'Light'}</span>
          </button>
          <button>
            <i className="fa-solid fa-plus"></i>
            <span>Create</span>
          </button>
          <button>
            <i className="fa-solid fa-tags"></i>
            <span>Tags</span>
          </button>
        </nav>
      )}
    </>
  )
}

export default Navbar
