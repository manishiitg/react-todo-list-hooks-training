import React from 'react';

function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <b className="navbar-brand">TodoList</b>

                <ul className="nav">
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary">Add Todo</button>
                    </li>
                </ul>

            </div>



        </nav>
    )
}

export default Nav