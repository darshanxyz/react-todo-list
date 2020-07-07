import React, { Component } from 'react';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      float: 'right'
    }
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
          {title}
          <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}

export default TodoItem;