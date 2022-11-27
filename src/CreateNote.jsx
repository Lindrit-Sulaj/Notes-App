import React, { useRef, useState } from 'react';
import NotePreview from './NotePreview';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [newMarkdown, setNewMarkdown] = useState('');
  const [tags, setTags] = useState([]);
  const [markdown, setMarkdown] = useState('');

  const newNote = { title, tags, markdown }

  const handleTags = () => {
    setTags([...tags, newMarkdown]);
  }

  return (
    <section className="createNote">
      <form action="">
        <div className='main-actions'>
          <div className='note-title'>
            <label htmlFor="note-title">Note title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Eg: React useState hook' id='note-title' />
          </div>
          <div className='note-tags'>
            <label htmlFor="note-tags">New Tag:</label>
            <div className="new-tag">
              <input type="text" value={newMarkdown} onChange={(e) => setNewMarkdown(e.target.value)} placeholder='Eg: react' id='note-tags' />
              <button type='button' onClick={handleTags}><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="tags">
          <p>Tags:</p>
          <div className='tag'>
            <span>react</span>
            <button><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className='tag'>
            <span>vue</span>
            <button><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className='tag'>
            <span>angular</span>
            <button><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className='tag'>
            <span>django</span>
            <button><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
        <div className='markdown'>
          <p>Markdown</p>
          <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
          </textarea>
        </div>
        <button type="submit">Create</button>
      </form>
      <NotePreview />
    </section>
  )
}

export default CreateNote