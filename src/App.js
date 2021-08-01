import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";

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
              <div className="tooltip">
                <PersistGate persistor={persistor}>
                  <AddToDo />
                </PersistGate>
              </div>
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
