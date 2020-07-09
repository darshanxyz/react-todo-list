import React, { Component } from 'react';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#FFF',
      padding: '20px',
      margin: '0px 10px',
      borderBottom: 'none',
      borderRadius: '7px',
      borderRight: this.props.todo.completed ? '10px solid #80C687' : 'none',
      color: '#555',
      fontWeight: '600',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto',
      gridColumn: '2/3',
      boxShadow: '3px 3px 15px -5px rgba(0,0,0,0.2)'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    const btnStyle = {
      border: 'none',
      padding: '10px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      float: 'right',
      alignSelf: 'center'
    }
    const todoItemStyle = {
      gridColumn: '1/7',
      display: 'grid',
      gridTemplateColumns: '1fr 9fr 2fr'
    }
    const inputStyle = {
      alignSelf: 'center',
    }
    const pStyle = {
      alignSelf: 'center',
      // fontWeight: '600'
    }

    return (
      <div style={this.getStyle()}>
        <div style={todoItemStyle}>
          <input style={inputStyle} type="checkbox" onChange={this.props.markComplete.bind(this, id)} defaultChecked={this.props.checked} /> <p style={pStyle}>{title}</p>
          {/* <button className="btn btn-primary" onClick={this.props.markComplete.bind(this, id)} style={btnStyle}>Mark Complete</button> */}
          <button className="btn btn-red" onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>Remove</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;