import React, { useEffect, useMemo, useRef, useState } from 'react';
import NotePreview from './NotePreview';
import useTheme from './ThemeContext';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const { tags, notes, notesDispatch } = useTheme();
  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [postTags, setPostTags] = useState([]);
  const [markdown, setMarkdown] = useState('');

  const handleCreateTags = (tag) => {
    if (tag === '' || !tags.includes(tag)) {
      alert("Tag cannot be empty or not be included in the tags");
      return;
    }
    setPostTags([...postTags, tag])
  }

  const handleDeleteTag = (id) => {
    let newTags = postTags.filter((tag, index) => index !== id);
    setPostTags(newTags);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = { title, postTags, markdown };
    notesDispatch({ type: 'add', payload: { noteData } });
    navigate('/')
  }

  return (
    <section className="createNote">
      <h1 className='new-note-title'>New note</h1>
      <form action="" autoComplete='off' onSubmit={handleSubmit}>
        <div className='main-actions'>
          <div className='note-title'>
            <label htmlFor="note-title">Note title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Eg: React useState hook' id='note-title' />
          </div>
          <div className='note-tags'>
            <label htmlFor="note-tags">New Tag:</label>
            <div className="new-tag">
              <NewTag handleTags={handleCreateTags} />
            </div>
          </div>
        </div>
        <div className="tags">
          <p>Tags:</p>

          {postTags.map((tag, index) => (
            <div className='tag' key={index}>
              <span>{tag}</span>
              <button type='button' onClick={() => handleDeleteTag(index)}><i className="fa-solid fa-xmark"></i></button>
            </div>
          ))}
        </div>
        <div className='markdown'>
          <p>Markdown:</p>
          <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
          </textarea>
        </div>
        <button type="submit">Create</button>
      </form>
      {/* <NotePreview markdown={markdown}/> */}
    </section>
  )
}

function NewTag({ handleTags }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Eg: react' id='note-tags' />
      <button type='button' onClick={() => { 
        handleTags(inputValue)
        setInputValue('') }}><i className="fa-solid fa-plus"></i></button>
    </>
  )
}

export default CreateNote