import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Task 2',
        completed: false
      },
      {
        id: 3,
        title: 'Task 3',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todo todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;