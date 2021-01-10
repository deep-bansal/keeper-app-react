import React, { Component } from 'react';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
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

  render() {
    return (
      <form className="create-note">
        <input
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
          value={this.state.title}
        />
        <textarea
          onChange={this.handleChange}
          name="content"
          placeholder="Take a note ..."
          value={this.state.content}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default CreateNote;
