import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    title: ''
  }

  onTextChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    const formStyle = {
      display: 'grid',
      gridTemplateColumns: '10fr 2fr',
      gridColumnGap: '20px',
      gridRowGap: '20px',
      gridColumn: '2/3',
      margin: '0 10px'
    }
    const textBoxStyle = {
      gridColumn: '1/11',
      padding: '15px',
      boxShadow: '3px 3px 15px -5px rgba(0,0,0,0.2)',
      border: 'none',
      borderRadius: '5px'
    }
    const submitBtnStyle = {
      gridColumn: '11/12'
    }
    return (
      <form onSubmit={this.onFormSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Enter the task"
          style={textBoxStyle}
          value={this.state.title}
          onChange={this.onTextChange}
        />
        <input
          type="submit"
          value="Add todo"
          className="btn btn-primary"
          style={submitBtnStyle}
        />

      </form>
    )
  }
}

export default AddTodo;