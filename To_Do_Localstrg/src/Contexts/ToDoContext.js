import React, { createContext, useContext } from 'react'

export const ToDoContext = createContext({
    todos:[

        {
            id:1,
            todo:"todo mesg",
            completed:false
        }
    ],
    addTodo:(todo) => {},
    updateTodo :(todo,id) => {},
    deleteTodo :(id) => {},
    togglecomplete :(id) => {}

})
export const useToDo = () => {
    return useContext(ToDoContext)
}


export const ToDoProvider = ToDoContext.Provider

