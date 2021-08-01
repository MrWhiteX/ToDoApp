import React from "react";
import AddToDoForm from "../AddToDoForm/AddToDoForm";
import ToDoList from "../ToDoList/ToDoList";

const AddToDo = () => {
  return (
    <section className="addtodo row">
      <div className="col-12">
        <AddToDoForm />
        <ToDoList />
      </div>
    </section>
  );
};

export default AddToDo;
