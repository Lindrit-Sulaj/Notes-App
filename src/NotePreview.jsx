import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import useTheme from './ThemeContext';

const NotePreview = () => {
  const { notes } = useTheme();
  const { id } = useParams();

  if (notes.length < id) {
    console.log(`note doesn't exist`)
    return;
  }

  const { title, postTags: tags, markdown } = notes[id];


  return (
    <section className="note-preview">
      <h1 className='note-title'>{title}</h1>
      
      <div className="tags">
        { tags ? (
          tags.map((tag, index) => (
            <div className='tag' key={index}>{tag}</div>
          ))
        ) : (
          <p className='no-tags'>There are no tags</p>
        )}
      </div>
      
      <hr className='hr'/>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        { markdown }
      </ReactMarkdown>
    </section>
  )
}

export default NotePreview