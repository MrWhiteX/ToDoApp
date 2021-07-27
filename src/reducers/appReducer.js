import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/appActions";

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO:
      return state.map((currentStateElement) => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement;
        }

        return {
          content: action.payload.content,
          id: currentStateElement.id,
        };
      });
    case DELETE_TODO:
      return state.filter(
        (currentStateElement) => currentStateElement.id !== action.payload.id
      );

    default:
      console.warn(`Brak akcji ${action.type}`);
      return state;
  }
  return state;
};
