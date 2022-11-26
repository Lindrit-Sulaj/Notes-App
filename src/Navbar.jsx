import React from 'react';
import useTheme from './ThemeContext';

const Navbar = () => {
  const { windowWidth } = useTheme();

  return (
    <>
      {windowWidth > 700 ? (
        <nav className="navbar__desktop">
          <h1>Notes</h1>
          <div>
            <button>
              <i className="fa-solid fa-moon"></i>
            </button>
            <button>Create</button>
            <button>Edit Tags</button>
          </div>
        </nav>) : (
        <nav className="navbar__mobile">
          <button>
            <i className="fa-solid fa-moon"></i>
            <span>Dark</span>
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
