export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nexToDoId = 0;

const addToDo = ({ content }) => ({
  type: ADD_TODO,
  payload: {
    id: ++nexToDoId,
    content,
  },
});

const editToDo = ({ content, id }) => ({
  type: EDIT_TODO,
  payload: {
    content,
    id,
  },
});

const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
