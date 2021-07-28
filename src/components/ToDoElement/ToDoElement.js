import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../../actions/appActions";
import AddToDo from "../AddToDo/AddToDo";

const ToDoElement = ({ deleteToDo, content, id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

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

      <button className="main-btn" type="submit" onClick={() => deleteToDo(id)}>
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

const connectActionsToProps = {
  deleteToDo,
};

const ToDoElementConsumer = connect(null, connectActionsToProps)(ToDoElement);

export default ToDoElementConsumer;
