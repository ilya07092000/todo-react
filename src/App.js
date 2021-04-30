import logo from './logo.svg';
import React, { useState } from 'react';
import TodoViews from './Components/Todo/TodoViews';

import './App.scss';
import './styles/main.scss';

function App() {
  let [todos, setTodos] = useState([{
    id: 1, 
    title: 'Do smth', 
    description: 'desc',
  }]);
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

    setTodos(todos.concat([{
      title: todo,
      id: Date.now(), 
    }]));

    setInputValue(inputValue = '');
  }

  function deleteTodos(id) {
    setTodos(todos.filter(todo => todo.id !== id));
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
          <TodoViews onDelete={(id) => deleteTodos(id)} todos={todos}/>
        </div>
      </div>
    </main>
  )
}

export default App;

