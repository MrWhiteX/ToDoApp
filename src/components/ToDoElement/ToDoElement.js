import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";

const ToDoElement = ({ content, id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => {
    setIsVisibleForm((prev) => !prev);
  };

  const formOrButtonElement = isVisibleForm ? (
    <AddToDo callback={toggleElements} content={content} id={id} />
  ) : (
    <>
      <button onClick={toggleElements}>Edytuj</button>
    </>
  );

  return (
    <li>
      <p>Zadanie: {content} </p>
      {formOrButtonElement}
    </li>
  );
};

export default ToDoElement;
