// src/App.js

import React , {useState} from 'react';

import Nav from "./components/nav"
import List from "./components/list"
import AddTodoForm from "./components/addtodoform"

import useTodoList from "./hooks/index"

function App() {

  let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  const [displayForm, setDisplayForm] = useState(false)

  return (
    <div className="App">

      <Nav todoList={todoList} setTodo={setTodo}  />
      <AddTodoForm displayForm={displayForm} setDisplayForm={setDisplayForm} />
      <List todoList={todoList} setTodo={setTodo} />

    </div>
  );
}

export default App;
