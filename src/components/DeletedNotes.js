import React from 'react';
import { Note } from './';

function DeletedNotes(props) {
  return (
    <div className="notes-area">
      {props.deletedNotes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
            deleteNote={props.deleteNote}
            updateNote={props.updateNote}
          />
        );
      })}
    </div>
  );
}

export default DeletedNotes;
