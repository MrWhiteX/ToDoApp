import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
