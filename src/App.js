// src/App.js

import React , {useState} from 'react';

import Nav from "./components/nav"
import List from "./components/list"
import AddTodoForm from "./components/addtodoform"

import useTodoList from "./hooks/index"

function App() {

  let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

  const [displayForm, setDisplayForm] = useState(false)

  let addform = null
  let list = <List todoList={todoList} setTodo={setTodo} />

  if(displayForm){
    addform = <AddTodoForm setDisplayForm={setDisplayForm} />
    list = null
  }

  return (
    <div className="App">

      <Nav setDisplayForm={setDisplayForm}  />
      {addform}
      {list}
      

    </div>
  );
}

export default App;
