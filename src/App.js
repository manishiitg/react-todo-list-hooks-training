// src/App.js

import React , {useState} from 'react';

import Nav from "./components/nav"
import List from "./components/list"
import AddTodoForm from "./components/addtodoform"

import useTodoList from "./hooks/todo"
import useDisplayForm from "./hooks/displayform"

function App() {

  let [todoList, addTodo, markTodo, deleteTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  const [displayForm, toggleDisplayForm] = useDisplayForm(false)

  let addform = null
  let list = <List todoList={todoList} markTodo={markTodo} deleteTodo={deleteTodo} />

  if(displayForm){
    addform = <AddTodoForm addTodo={addTodo} toggleDisplayForm={toggleDisplayForm} />
    list = null
  }

  return (
    <div className="App">

      <Nav toggleDisplayForm={toggleDisplayForm}  />
      {addform}
      {list}
      

    </div>
  );
}

export default App;
