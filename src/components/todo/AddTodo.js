import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    title: ''
  }

  onTextChang = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    const formStyle = {
      display: 'flex',
      padding: '15px 0'
    }
    const textBoxStyle = {
      flex: '10',
      padding: '15px',
      marginRight: '5px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }
    const submitBtnStyle = {
      flex: '1'
    }
    return (
      <form onSubmit={this.onFormSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          style={textBoxStyle}
          value={this.state.title}
          onChange={this.onTextChange}
        />
        <input
          type="submit"
          value="Add todo"
          className="btn"
          style={submitBtnStyle}
        />

      </form>
    )
  }
}

export default AddTodo;