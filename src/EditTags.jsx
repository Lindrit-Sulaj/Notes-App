import React, { useState, useRef } from 'react';
import useTheme from './ThemeContext';

const EditTags = () => {
  const { tags, tagsDispatch } = useTheme();
  const inputRef = useRef();

  const addTag = () => {
    const value = inputRef.current.value;
    if (tags.includes(value)) return;

    tagsDispatch({ type: 'add', payload: { name: value } });
    inputRef.current.value = ''
  }

  const deleteTag = (id) => {
    tagsDispatch({ type: 'delete', payload: { id: id }});
  }

  return (
    <div className="EditTags">
      <p className="heading"><span>Add</span>, delete or edit Tags</p>
      <div className='Add-Tag'>
        <input type="text" ref={inputRef} placeholder='Write a new tag' />
        <button onClick={addTag}>Add</button>
      </div>
      <div className='Tags'>
        {tags ? (
          tags.map((tag, index) => (
            <Tag deleteTag={deleteTag} id={index} name={tag} key={index} />
          ))
        ) : (
          <p>You have no tags yet</p>
        )}
      </div>
    </div>
  )
}

const Tag = ({ deleteTag, id, name }) => {
  return (
    <div className='Tag'>
      <p>{name}</p>
      <button onClick={() => deleteTag(id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default EditTags