import { ADD_TASK, REMOVE_TASK } from '../constants';

export const addTask = (id, text) => ({
  type: ADD_TASK,
  id,
  text
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
})