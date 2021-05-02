import logo from './logo.svg';
import React, { useState } from 'react';
import TodoViews from './Components/Todo/TodoViews';
import { connect } from 'react-redux';
import { addTask, removeTask } from './actions/actionCreator';

import './App.scss';
import './styles/main.scss';

function App(props) {
  // let [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [correctValue, setCorrectValue] = useState(true);

  function inputHandler(event) {
    setInputValue(event.target.value)
  }

  function addTodosHandler() {
    let todo = inputValue;

    if(!todo.trim()) {
      correctValue = true;
      return;
    };

    if (!correctValue) {
      correctValue = true;
    }

    props.addTask(Date.now(), todo);

    setInputValue(inputValue = '');
  }

  function deleteTodos(id) {
    props.removeTask(id);
  }

  return (
    <main>
      <div className="container">
        <div className="main__inner">
          <div className="input-block">
            <div className={[correctValue ? 'input-block_green' : 'input-block_red' ,'input-block__inner'].join(' ')}>
              <input placeholder="enter your task" value={ inputValue } onChange={ inputHandler }/>
              <button onClick={addTodosHandler}>Submit</button>
            </div>
          </div>  
          <TodoViews onDelete={(id) => deleteTodos(id)} todos={props.tasks}/>
        </div>
      </div>
    </main>
  )
}

export default connect(state => ({
  tasks: state.tasks
}), { addTask, removeTask })(App);

