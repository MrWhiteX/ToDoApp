import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo, editToDo } from "../../actions/appActions";

const AddToDo = ({ addToDo, editToDo, id, callback, content = "" }) => {
  const [contentInput, setContentInput] = useState(content);

  const handleChangeContent = (e) => {
    setContentInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const contentObject = {
      content: contentInput,
      id,
    };

    id ? editToDo(contentObject) : addToDo(contentObject);

    if (id) {
      callback();
    }
  };

  return (
    <section className="addtodo row">
      <div className="col-12">
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
      </div>
    </section>
  );
};

const connectActionsToProps = {
  addToDo,
  editToDo,
};

const AddToDoConsumer = connect(null, connectActionsToProps)(AddToDo);

export default AddToDoConsumer;
