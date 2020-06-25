import React from 'react';

function List() {
    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
              <span class="badge bg-danger rounded-pill">
                            &times;
              </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in</li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus</li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Porta ac consectetur ac</li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    )
}

export default List