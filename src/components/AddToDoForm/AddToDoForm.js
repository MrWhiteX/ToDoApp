import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, editToDo } from "../../actions/appActions";

const AddToDoForm = ({ id, callback, content = "" }) => {
  const [contentInput, setContentInput] = useState(content);
  const dispatch = useDispatch();

  const handleChangeContent = (e) => {
    setContentInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setContentInput("");

    const contentObject = {
      content: contentInput,
      id,
    };

    id ? dispatch(editToDo(contentObject)) : dispatch(addToDo(contentObject));

    if (id) {
      callback();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input
          onChange={handleChangeContent}
          type="text"
          value={contentInput}
          required
          placeholder="Co chcesz zrobić?"
        />
      </div>
      <button className="main-btn" type="submit">
        {id ? "Edytuj" : "Dodaj"}
      </button>
    </form>
  );
};

export default AddToDoForm;
