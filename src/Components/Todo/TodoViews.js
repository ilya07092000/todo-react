import React from 'react';
import TodoItem from './TodoItem';

function TodoView(props) {
  
  let todo = props.todos.map((todo, index) => {
    return (
      <TodoItem onDelete={(id) => props.onDelete(id)} todo={todo} key={index}/>
    )
  })

  return (
    <>
      {todo}
    </>
  )
} 

export default TodoView;