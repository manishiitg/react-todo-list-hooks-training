// src/components/addTodo.js

import React, { useState } from 'react';
import useAddTodoForm from "../hooks/form"

function AddTodoForm(props) {

    const { formState, updateTodoText, updateDate } = useAddTodoForm()

    const submitForm = (event) => {
        event.preventDefault()
        props.addTodo(formState.text, formState.duedate)
        props.toggleDisplayForm()
    }

    return (
        <div className='row'>
            <div className="col gx-5">
                <form>
                    <div className="mb-3">
                        <label for="todoText" className="form-label">Todo</label>
                        <input type="text" className="form-control" id="todoText" value={formState.text} onChange={updateTodoText} />
                    </div>
                    <div className="mb-3">
                        <label for="date" className="form-label">Due Date</label>
                        <input type="date" className="form-control" id="date" onChange={updateDate} value={formState.date} />
                    </div>

                    <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodoForm