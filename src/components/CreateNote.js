import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      isClicked: false,
    };
  }

  handleChange = (event) => {
    const inputVal = event.target.value;
    const FieldName = event.target.name;

    if (FieldName === 'title') {
      this.setState({
        title: inputVal,
      });
    } else if (FieldName === 'content') {
      this.setState({
        content: inputVal,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onAdd } = this.props;
    onAdd(this.state.title, this.state.content);
    this.setState({
      title: '',
      content: '',
    });
  };

  componentWillMount() {
    // document.addEventListener('mousedown', this.handleClick, true);
  }

  componentWillUnmount() {
    // document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (e.target === null) {
      return;
    }
    if (this.node.contains(e.target)) {
      this.setState({
        isClicked: true,
      });

      return;
    }
    this.handleClickOutside();
  };
  handleClickOutside = () => {
    this.setState({
      isClicked: false,
    });
  };

  render() {
    const { isClicked } = this.state;
    return (
      <form
        className="create-note"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div onClick={this.handleClick}>
          {isClicked && (
            <input
              onChange={this.handleChange}
              name="title"
              placeholder="Title"
              value={this.state.title}
            />
          )}
          <textarea
            rows={isClicked ? '3' : '1'}
            onChange={this.handleChange}
            name="content"
            placeholder="Take a note ..."
            value={this.state.content}
          />
        </div>

        {isClicked && (
          <Zoom in={true}>
            <Fab onClick={this.handleSubmit}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    );
  }
}

export default CreateNote;
