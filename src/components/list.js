// src/components/list.js

import React from 'react';
import useTodoList from "./../hooks/index"

function List(props) {
    let [todoList, setTodo] = useTodoList(["todo 1", "todo 2", "todo 3"])

    const addTodo = () => {
        setTodo([...todoList, "todo " + (todoList.length + 1)])
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="list-group">
                    {
                        todoList.map((item, idx) => {
                            return <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                {item}
                                <span className="badge bg-danger rounded-pill">&times;</span>
                            </li>
                        })
                    }

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary" onClick={addTodo}>Add Random Test Todo</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default List