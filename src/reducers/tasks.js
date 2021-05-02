import { ADD_TASK, REMOVE_TASK } from '../constants';

const tasksList = [{
  id: 1, 
  title: 'Do smth', 
  description: 'desc',
}];

const tasks = (state = tasksList, { id, text, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text
        }
      ]
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    default:
      return state;
  }
};

export default tasks;