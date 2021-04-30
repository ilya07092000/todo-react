import React from 'react';
import TodoItem from './TodoItem';

function TodoView(props) {
  
  let todo = props.todos.map((todo, index) => {
    return (
      <TodoItem todo={todo} key={index}/>
    )
  })

  return (
    <>
      {todo}
    </>
  )
} 

export default TodoView;