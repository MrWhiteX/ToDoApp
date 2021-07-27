import React from "react";
import { connect } from "react-redux";
import ToDoElement from "../ToDoElement/ToDoElement";

const ToDoList = ({ content }) => {
  const contentElements = content.map((el) => (
    <ToDoElement key={el.id} {...el} />
  ));

  return <ul>{contentElements}</ul>;
};

const connectReduxStateToProps = (store) => ({
  content: store.content,
});

const ListConsumer = connect(connectReduxStateToProps)(ToDoList);

export default ListConsumer;
