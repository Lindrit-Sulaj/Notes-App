import React, { useState } from 'react';
import useTheme from './ThemeContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
  const { tags, notes, notesDispatch } = useTheme();
  const navigate = useNavigate()
  const { id } = useParams();

  const [title, setTitle] = useState(notes[id].title);
  const [postTags, setPostTags] = useState(notes[id].postTags);
  const [markdown, setMarkdown] = useState(notes[id].markdown);

  const handleCreateTags = (tag) => {
    if (tag === '' || !tags.includes(tag)) {
      alert("Tag cannot be empty or not be included in the tags");
      return;
    } else if (postTags.includes(tag)) {
      alert("Tag already has been added");
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

    if (title === '') {
      alert("Title can't be empty!");
      return;
    } else if (markdown === '') {
      let confirmEmptyMarkdown = confirm("You have written nothing in the markdown. Do you want to continue?");
      if (!confirmEmptyMarkdown) return;
    }

    const noteData = { title, postTags, markdown };
    notesDispatch({ type: 'edit', payload: { noteData, id } });
    navigate('/')
  }

  return (
    <section className="createNote">
      <h1 className='new-note-title'>Edit note</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </section>
  )
}

const NewTag = ({ handleTags }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Eg: react' id='note-tags' />
      <button type='button' onClick={() => {
        handleTags(inputValue)
        setInputValue('')
      }}><i className="fa-solid fa-plus"></i></button>
    </>
  )
}

export default EditNote