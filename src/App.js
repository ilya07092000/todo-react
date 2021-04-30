import logo from './logo.svg';
import React from 'react';
import TodoViews from './Components/Todo/TodoViews';

import './App.scss';
import './styles/main.scss';

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
      correctValue: true,
    }
  } 

  inputChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  addTodos() {
    let todo = this.state.inputValue;

    if(!todo.trim()) {
      this.setState({
        correctValue: false,
      })

      return;
    };

    if (!this.state.correctValue) {
      this.setState({
        correctValue: true,
      })
    }

    let newTodos = [...this.state.todos];

    newTodos.push({
      id: Date.now(),
      title: todo,
    });

    this.setState({
      todos: newTodos,
      inputValue: '',
    })
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="main__inner">
            <div className="input-block">
              <div className={[this.state.correctValue ? 'input-block_green' : 'input-block_red' ,'input-block__inner'].join(' ')}>
                <input placeholder="enter your task" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addTodos.bind(this)}>Submit</button>
              </div>
            </div>  
            <TodoViews todos={this.state.todos}/>
            </div>
        </div>
      </main>
    )
  }
}

export default App;
