import React from 'react'
import {Link} from 'react-router-dom'

function header() {
    return (
        <div className="text-center bg-dark text-white p-3">
            <h3>Todo List</h3>
            <ul className="nav d-flex justify-content-center">
                <li className="nav-item ">
                    <Link className="nav-link text-white " to={'/todo_app'}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to={'/todo_app/about'}>About</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default header
