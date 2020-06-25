import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">TodoList</a>

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