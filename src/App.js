import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">All Users</h1>
          </header>
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
