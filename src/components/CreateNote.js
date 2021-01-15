import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

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
  };

  handleExpand = () => {
    this.setState({
      isClicked: true,
    });
  };

  render() {
    const { isClicked } = this.state;
    return (
      <form className="create-note">
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
          onClick={this.handleExpand}
        />

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
