import './Todo.scss';
import '../../styles/main.scss';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p>{props.todo.id}, {props.todo.title}</p>
      <button onClick={props.onDelete.bind(null, props.todo.id)} className="todo-item__delete">Delete</button>
    </div>
  )
}

export default TodoItem;