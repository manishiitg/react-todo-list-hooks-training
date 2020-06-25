// src/components/list.js

import React, { useState, useEffect } from 'react';

function List() {
    const [todoList, setTodo] = useState(["todo 1", "todo 2", "todo 3"])

    const addTodo = () => {
        setTodo([...todoList, "todo " + (todoList.length + 1)])
    }

    useEffect( () => {
        document.title = "New Todo Added!"
        window.localStorage.setItem("todoList", todoList)

        return () => {
            window.localStorage.clear()
        }
    })
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