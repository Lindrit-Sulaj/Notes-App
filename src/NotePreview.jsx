import React from 'react';
import ReactMarkdown from 'react-markdown';

const NotePreview = ({ title, tags, markdown }) => {
  return (
    <section className="note-preview">
      <ReactMarkdown>
        # Hello World
      </ReactMarkdown>
    </section>
  )
}

export default NotePreview