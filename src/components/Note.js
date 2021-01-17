import React, { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import DeleteIcon from '@material-ui/icons/Delete';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RestoreFromTrashOutlinedIcon from '@material-ui/icons/RestoreFromTrashOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ArchiveIcon from '@material-ui/icons/Archive';

function Note(props) {
  const title = useRef(props.note.title);
  const content = useRef(props.note.content);

  const handleChange = (evt) => {
    if (evt.currentTarget.localName === 'h1') {
      title.current = evt.target.value;
      const titleVal = evt.target.value;
      props.updateNote(evt.currentTarget.localName, titleVal, props.note);
    } else if (evt.currentTarget.localName === 'p') {
      content.current = evt.target.value;
      const contentVal = evt.target.value;
      props.updateNote(evt.currentTarget.localName, contentVal, props.note);
    }
  };
  const [show, setVisibility] = useState('hidden');
  const setColor = useState('white')[1];

  function handleColor(evt) {
    console.log(evt.target.classList.value);
    const colorVal = evt.target.style.backgroundColor;
    setColor(colorVal);
    setVisibility('hidden');
    props.updateNote(evt.target.classList.value, colorVal, props.note);
  }
  function showPallete() {
    if (show === 'hidden') {
      setVisibility('visible');
    } else {
      setVisibility('hidden');
    }
  }
  function handleNotePin() {
    if (props.note.pinNote === true) {
      props.updateNote('pinNote', false, props.note);
      return;
    }
    props.updateNote('pinNote', true, props.note);
  }
  function handleNoteArchive() {
    if (props.note.archiveNote === true) {
      props.updateNote('archiveNote', false, props.note);
      return;
    }
    props.updateNote('archiveNote', true, props.note);
  }
  function handleDelete() {
    props.updateNote('deleteNote', true, props.note);
  }
  function handleDeleteForever() {
    props.deleteNoteForever(props.note);
  }
  function handleDeleteRestore() {
    props.updateNote('deleteNote', false, props.note);
  }
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <ContentEditable
        html={title.current}
        onChange={handleChange}
        tagName="h1"
      />
      <ContentEditable
        html={content.current}
        onChange={handleChange}
        tagName="p"
      />

      {!props.note.deleteNote && (
        <ul className="buttonList">
          <li className="color-li">
            <button onClick={showPallete}>
              <PaletteOutlinedIcon />
            </button>
            <div className="color-pallete" style={{ visibility: show }}>
              <div
                className="color-divs"
                style={{ backgroundColor: '#FFC233' }}
                value="orange"
                onClick={handleColor}
              ></div>
              <div
                className="color-divs"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid lightgray',
                }}
                value="orange"
                onClick={handleColor}
              ></div>
              <div
                className="color-divs"
                style={{
                  backgroundColor: '#69C9B6',
                }}
                value="orange"
                onClick={handleColor}
              ></div>

              <div
                className="color-divs"
                style={{ backgroundColor: '#7fff7f' }}
                value="green"
                onClick={handleColor}
              ></div>
              <div
                className="color-divs"
                style={{ backgroundColor: '#ff6868' }}
                value="red"
                onClick={handleColor}
              ></div>
              <div
                className="color-divs"
                style={{ backgroundColor: '#7171ff' }}
                value="blue"
                onClick={handleColor}
              ></div>
            </div>
          </li>
          <li>
            <button onClick={handleNoteArchive}>
              <ArchiveIcon />
            </button>
          </li>
          <li>
            <button onClick={handleNotePin}>
              <BookmarkBorderOutlinedIcon />
            </button>
          </li>
          <li>
            <button onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </li>
        </ul>
      )}
      {props.note.deleteNote && (
        <ul className="buttonList">
          <li>
            <button onClick={handleDeleteForever}>
              <DeleteForeverOutlinedIcon />
            </button>
          </li>
          <li>
            <button onClick={handleDeleteRestore}>
              <RestoreFromTrashOutlinedIcon />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Note;
