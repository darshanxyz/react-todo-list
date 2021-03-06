import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Todo from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo'
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7').then(res => {
      this.setState({
        todos: res.data
      })
    })
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
      <Router>
        <div className="App">
          <div className="container">
            <Header className="header" />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo className="add-todo" addItem={this.addItem} />
                <Todo className="todo-item" todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;