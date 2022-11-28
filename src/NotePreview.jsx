import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NotePreview = ({ title, tags, markdown }) => {
  return (
    <section className="note-preview">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        { markdown }
      </ReactMarkdown>
    </section>
  )
}

export default NotePreview