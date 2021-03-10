import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoViews from './Components/TodoViews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1, 
          title: 'Do smth', 
          description: 'desc',
        }
      ],
      inputValue: '',
    }
  } 

  inputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTodos() {
    let todo = this.state.inputValue;

    if(!todo.trim()) return;

    let newTodos = [...this.state.todos];

    newTodos.push({
      id: Date.now(),
      title: todo,
      description: 'default'
    });

    this.setState({
      todos: newTodos,
      inputValue: '',
    })
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="enter your task" value={this.state.inputValue} onChange={this.inputChange.bind(this)}>
            
          </input>
          <button onClick={this.addTodos.bind(this)}>
            Submit
          </button>
        </div>

        <TodoViews todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
