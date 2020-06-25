// src/App.js

import React from 'react';

import Nav from "./components/nav"
import List from "./components/list"

import useTodoList from "./hooks/index"

function App() {

  

  return (
    <div className="App">

      <Nav  />
      <List />

    </div>
  );
}

export default App;
