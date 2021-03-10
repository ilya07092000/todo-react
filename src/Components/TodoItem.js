function TodoItem(props) {
  return (
    <div>
      {props.todo.id}, {props.todo.title}, {props.todo.description}
    </div>
  )
}

export default TodoItem;