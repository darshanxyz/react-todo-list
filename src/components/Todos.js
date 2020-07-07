import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem} />
        ));
    }
}

export default Todo;