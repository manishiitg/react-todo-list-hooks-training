import React from 'react';

import useTodoList from "./../hooks/index"

function Nav(props) {
    let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

    const addTodo = () => {
        setTodo([...todoList, "todo " + (todoList.length + 1)])
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <b className="navbar-brand">TodoList</b>

                <ul className="nav">
                    <li className="nav-item">
                        <button type="button" onClick={addTodo} className="btn btn-primary">Add Todo</button>
                    </li>
                </ul>

            </div>



        </nav>
    )
}

export default Nav