import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm, selectedTags, setSelectedTags }) => {
  return (
    <div className="Searchbar">
      <div className='search'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search for your notes' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <i className="fa-solid fa-xmark" onClick={() => setSearchTerm('')}></i>
      </div>
      <div className='tags'>
        <i className="fa-solid fa-tags"></i>
        <input type="text" value={selectedTags} onChange={(e) => setSelectedTags(e.target.value)} placeholder='Tags seperated by a space' />
      </div>
    </div>
  )
}

export default SearchBar