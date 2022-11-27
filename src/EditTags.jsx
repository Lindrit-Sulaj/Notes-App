import React, { useState, useRef } from 'react';
import useTheme from './ThemeContext';

const EditTags = () => {
  const { tags, tagsDispatch } = useTheme();
  const inputRef = useRef();

  const addTag = () => {
    const value = inputRef.current.value;
    if (tags.includes(value)) { 
      alert("Alert: Tag Already Exists");
      return;
    } else if (value === '') {
      alert("Alert: Cannot add empty tag");
      return;
    };

    tagsDispatch({ type: 'add', payload: { name: value } });
    inputRef.current.value = ''
  }

  const deleteTag = (id) => {
    tagsDispatch({ type: 'delete', payload: { id: id } });
  }

  const handleEdit = (id, value) => {
    tagsDispatch({ type: 'edit', payload: { id, value } })
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
            <Tag handleEdit={handleEdit} deleteTag={deleteTag} id={index} name={tag} key={index} />
          ))
        ) : (
          <p>You have no tags yet</p>
        )}
      </div>
    </div>
  )
}

const Tag = ({ deleteTag, id, name, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  return (
    <>
      {!isEditing &&
        (<div className='Tag'>
          <p onDoubleClick={() => setIsEditing(true)}>{name}</p>
          <button onClick={() => deleteTag(id)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>)}
      {isEditing && (
        <div className='Tag-Editing'>
          <input type="text" value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
          }} />
          <button onClick={() => {
            setIsEditing(false);
            handleEdit(id, inputValue);
          }}>
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      )}
    </>
  )
}

export default EditTags