import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../actions/appActions";
import AddToDo from "../AddToDo/AddToDo";

const ToDoElement = ({ content, id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const dispatch = useDispatch();

  const toggleElements = () => {
    setIsVisibleForm((prev) => !prev);
  };

  const formOrButtonElement = isVisibleForm ? (
    <AddToDo callback={toggleElements} content={content} id={id} />
  ) : (
    <>
      <button className="main-btn" onClick={toggleElements}>
        Edytuj
      </button>

      <button
        className="main-btn"
        type="submit"
        onClick={() => dispatch(deleteToDo(id))}
      >
        Usuń
      </button>
    </>
  );

  return (
    <li>
      <p>
        <span style={{ marginRight: 20 }}>Czynność:</span> {content}{" "}
      </p>

      {formOrButtonElement}
    </li>
  );
};

export default ToDoElement;
