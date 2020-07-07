import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todo from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo'
import { v4 as uuid } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Task 1',
        completed: false
      },
      {
        id: uuid(),
        title: 'Task 2',
        completed: false
      },
      {
        id: uuid(),
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

  addItem = (title) => {
    const newItem = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo addItem={this.addItem} />
          <Todo todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;