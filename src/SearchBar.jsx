import React, { useEffect, useState } from 'react';
import useTheme from './ThemeContext';

const SearchBar = ({ searchTerm, setSearchTerm, selectedTags, setSelectedTags }) => {
  const { tags } = useTheme();

  return (
    <div className="Searchbar">
      <div className='search'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search for your notes:' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <i className="fa-solid fa-xmark" onClick={() => setSearchTerm('')}></i>
      </div>
      <div className='tags'>
        { tags.map((name, index) => (
          <Tag name={name} key={index} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
        )) }
      </div>
    </div>
  )
}

const Tag = ({ name, selectedTags, setSelectedTags }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      setSelectedTags([...selectedTags, name]);
    } else {
      let id = selectedTags.indexOf(name);
      let newTags = selectedTags.filter((name, index) => index !== id);
      setSelectedTags(newTags);
    }
  }, [isSelected]);

  return (
    <button onClick={() => setIsSelected(!isSelected)} className={`${(isSelected) ? 'active-tag' : ''}`}>
      { name }
    </button>
  )
}

export default SearchBar