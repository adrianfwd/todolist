import React from 'react';
import NoteCard from './NoteCard';
import NoteInput from './NoteInput';

export default function NoteList({ notes, handle_add_notes }) {
  return (
    <>
      <NoteInput handle_add_note={handle_add_notes} />
      <br />
      <ul className="main">
        {notes.map((note, index) => (
          <NoteCard key={index}>
            <p>{note}</p>
          </NoteCard>
        ))}
      </ul>
    </>
  );
}
