import React, { useEffect, useMemo, useState } from 'react';
import useTheme from './ThemeContext';
import { Link } from 'react-router-dom';

Array.prototype.getObjectIndex = function (givenObj) {
  for (let i = 0; i < this.length; i++) {
    const object = this[i];
    if (JSON.stringify(object) === JSON.stringify(givenObj)) {
      return i;
    }
  }
}

const SearchResults = ({ searchTerm, selectedTags }) => {
  const { tags, notes, notesDispatch } = useTheme();

  const results = useMemo(() => {
    return notes.filter((note, id) => {
      let isValid = true;

      if (!note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        isValid = false;
      }

      const tagsValid = true;
      for (let tag of selectedTags) {
        if (!note.postTags.includes(tag) && tag !== '') {
          isValid = false;
        }
      }

      if (isValid) return note;
    })
  }, [searchTerm, selectedTags, notes])

  return (
    <div className="SearchResults">
      {results.map((result, index) => {
        return <NoteBox notesDispatch={notesDispatch} result={result} title={result.title} tags={result.postTags} key={index} />
      })}
    </div>
  )
}

const NoteBox = ({ result, title, tags, notesDispatch }) => {
  const { notes } = useTheme();
  const [optionsOpened, setOptionsOpened] = useState(false);

  const index = notes.getObjectIndex(result);

  return (
    <div className='note-box'>
      <div className='info'>
        <Link to={`/notes/${index}`} ><p className='title'>{title}</p></Link>
        <div className="tags">
          {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
      </div>
      <div className="actions">
        <button className='open-actions' onClick={() => setOptionsOpened(!optionsOpened)}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>

        {optionsOpened && (
          <div className='all-actions'>
            <button className='close' onClick={() => setOptionsOpened(false)}>
              <span>Close</span>
              <i className='fa-solid fa-xmark'></i>
            </button>

            <Link to={`/notes/${index}`}>
              <button className='view'>
                <span>View</span>
              </button>
            </Link>
            <Link to={`/edit/${index}`}>
              <button className='edit'>
                <span>Edit</span>
              </button>
            </Link>
            <button className='delete' onClick={() => {
              notesDispatch({ type: 'delete', payload: { id: index } })
              setOptionsOpened(false);
            }}>
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults