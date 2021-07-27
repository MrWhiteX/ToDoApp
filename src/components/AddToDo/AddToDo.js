import React, { useState } from "react";

const AddToDo = (props) => {
  const { content = "", id } = props;
  const [contentInput, setContentInput] = useState(content);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeContent = (e) => {
    setContentInput(e.target.value);
  };

  return (
    <section className="addtodo row">
      <div className="col-12">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label>
              Treść zadania:
              <input
                onChange={handleChangeContent}
                type="text"
                value={contentInput}
                required
              />
            </label>
          </div>
          <button type="submit">{id ? "Edytuj" : "Dodaj"}</button>
        </form>
      </div>
    </section>
  );
};

export default AddToDo;
