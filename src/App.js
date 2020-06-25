// src/App.js

import React from 'react';

import Nav from "./components/nav"
import List from "./components/list"

import useTodoList from "./hooks/index"

function App() {

  let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  return (
    <div className="App">

      <Nav todoList={todoList} setTodo={setTodo}  />
      <List todoList={todoList} setTodo={setTodo} />

    </div>
  );
}

export default App;
