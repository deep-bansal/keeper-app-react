import React, { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import DeleteIcon from '@material-ui/icons/Delete';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

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

      <ul className="buttonList">
        <li>
          <button>
            <AddAlertOutlinedIcon />
          </button>
        </li>
        <li>
          <button onClick={showPallete}>
            <PaletteOutlinedIcon />
          </button>
        </li>
        <li>
          <button>
            <LabelOutlinedIcon />
          </button>
        </li>
        <li>
          <button onClick={handleNotePin}>
            <BookmarkBorderOutlinedIcon />
          </button>
        </li>
        <li>
          <button>
            <DeleteIcon />
          </button>
        </li>
      </ul>
      <div className="color-pallete" style={{ visibility: show }}>
        <div
          className="color-divs"
          style={{ backgroundColor: '#ffaf1c' }}
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
    </div>
  );
}

export default Note;
