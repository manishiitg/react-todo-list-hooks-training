import React from 'react';

function Nav(props) {
    const addTodo = () => {
        props.setTodo([...props.todoList, "todo " + (props.todoList.length + 1)])
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