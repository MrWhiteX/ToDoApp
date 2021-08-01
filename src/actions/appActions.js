export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nexToDoId = 0;

const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

export const addToDo = ({ content }) => ({
  type: ADD_TODO,
  payload: {
    id: getId(),
    content,
  },
});

export const editToDo = ({ content, id }) => ({
  type: EDIT_TODO,
  payload: {
    content,
    id,
  },
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
