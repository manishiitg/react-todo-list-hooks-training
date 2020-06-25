// src/App.js

import React from 'react';

import Nav from "./components/nav"
import List from "./components/list"

import { useState, useEffect } from 'react';

function App() {

  const [todoList, setTodo] = useState(["todo 1", "todo 2", "todo 3"])

    useEffect(() => {

        document.title = "New Todo Added!"
        window.localStorage.setItem("todoList", todoList)

        return () => {
            window.localStorage.clear()
        }
    })

  return (
    <div className="App">

      <Nav setTodo={setTodo} />
      <List todoList={todoList} setTodo={setTodo} />

    </div>
  );
}

export default App;
