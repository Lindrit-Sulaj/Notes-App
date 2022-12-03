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
      <nav className="navbar__desktop">
        <Link to="/">
          <h1 className='logo'>Notes</h1>
        </Link>
        <div>
          <button className='darkModeButton' onClick={() => setColorTheme((colorTheme === 'light') ? 'dark' : 'light')}>
            <i className={`fa-solid fa-${(colorTheme === 'light') ? 'moon' : 'sun'}`}></i>
          </button>
          <Link to={"/create"}>
            <button className='create'>Create</button>
          </Link>
          <button className='edit-tags' onClick={() => setEditTagsOpened(!editTagsOpened)}>Edit Tags</button>
        </div>
      </nav>
      <Dialog isOpen={editTagsOpened} setIsOpen={setEditTagsOpened}
      ><EditTags setIsOpen={setEditTagsOpened} /></Dialog>
    </>
  )
}

export default Navbar
