import React from 'react';
import { Note } from './';

function ArchiveNotes(props) {
  return (
    <div className="notes-area">
      {props.archiveNotes.length === 0 && (
        <div className="blank-backgorund archive">
          <i class="fas fa-archive"></i>
          <br></br>
          <br></br>
          Your archived notes appear here
        </div>
      )}
      {props.archiveNotes.map((note) => {
        return <Note note={note} key={note.id} updateNote={props.updateNote} />;
      })}
    </div>
  );
}

export default ArchiveNotes;
