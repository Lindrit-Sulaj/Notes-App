import React, { useState } from 'react';
import useTheme from './ThemeContext';
import { Link } from 'react-router-dom';
import Dialog from './Dialog';
import EditTags from './EditTags';

const Navbar = () => {
  const { windowWidth, colorTheme, setColorTheme } = useTheme();
  const [editTagsOpened, setEditTagsOpened] = useState(false);

  return (
    <>
      {windowWidth > 700 ? (
        <nav className="navbar__desktop">
          <Link to="/">
            <h1 className='logo'>Notes</h1>
          </Link>
          <div>
            <button className='darkModeButton' onClick={() => setColorTheme((colorTheme === 'light') ? 'dark' : 'light')}>
              <i className={`fa-solid fa-${(colorTheme === 'light') ? 'moon' : 'sun'}`}></i>
            </button>
            <button className='create'>Create</button>
            <button onClick={() => setEditTagsOpened(!editTagsOpened)}>Edit Tags</button>
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
          <button onClick={() => setEditTagsOpened(!editTagsOpened)}>
            <i className="fa-solid fa-tags"></i>
            <span>Tags</span>
          </button>
        </nav>
      )}
      <Dialog isOpen={editTagsOpened} setIsOpen={setEditTagsOpened}
      ><EditTags /></Dialog>
    </>
  )
}

export default Navbar
