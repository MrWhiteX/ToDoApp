import React from "react";
import { useSelector } from "react-redux";

import ToDoElement from "../ToDoElement/ToDoElement";

const ToDoList = () => {
  const content = useSelector((store) => store.content);

  const contentElements = content.map((el, index) => (
    <>
      <ToDoElement key={index} {...el} />
    </>
  ));

  return <ul>{contentElements}</ul>;
};

export default ToDoList;
