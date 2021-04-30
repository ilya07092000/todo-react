import './Todo.scss';
import '../../styles/main.scss';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p>{props.todo.id}, {props.todo.title}</p>
      <button className="todo-item__delete">Delete</button>
    </div>
  )
}

export default TodoItem;