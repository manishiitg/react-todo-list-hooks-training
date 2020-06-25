import { useState, useEffect } from 'react';

const useTodoList = (initState) => {

    const [todoList, setTodo] = useState((initState))



    useEffect(() => {

        document.title = "New Todo Added!"
        window.localStorage.setItem("todoList", todoList)

        return () => {
            window.localStorage.clear()
        }
    })

    const addTodo = (text, duedate) => {
        setTodo([...todoList, { "text": text, "duedate": duedate }])
    }

    const getTodoWithDefaultDate = (initState) => {
        //this isn't needed as just. 
        // this is just to demonstrate we can manupulate the inital state as well
        if (initState) {
            return initState.map((ele) => {
                if (typeof (ele) == "object") {
                    return ele
                } else {
                    return {
                        "text": ele,
                        "duedate": new Date()
                    }
                }
            })
        } else {
            return initState
        }

    }

    return [getTodoWithDefaultDate(todoList), addTodo]

}

export default useTodoList