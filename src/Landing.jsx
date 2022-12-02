import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <section className="Landing">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags} />
      <SearchResults 
        searchTerm={searchTerm} 
        selectedTags={selectedTags} />
    </section>
  )
}

export default Landing