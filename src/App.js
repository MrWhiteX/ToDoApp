import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <Route exact={true} path="/">
              <Header />
            </Route>
            <Route path="/list">
              <AddToDo />
              <ToDoList />
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
