import React, { useRef } from 'react';
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
  return (
    <div className="note">
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
        <li style={{ ...styles }}>
          <button>
            <AddAlertOutlinedIcon />
          </button>
        </li>
        <li style={{ ...styles }}>
          <button>
            <PaletteOutlinedIcon />
          </button>
        </li>
        <li style={{ ...styles }}>
          <button>
            <LabelOutlinedIcon />
          </button>
        </li>
        <li style={{ ...styles }}>
          <button>
            <BookmarkBorderOutlinedIcon />
          </button>
        </li>
        <li style={{ ...styles }}>
          <button>
            <DeleteIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Note;

const styles = {
  transition: 'all 0.5s ease-in-out',
};
