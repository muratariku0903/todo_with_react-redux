import { AddTodo, DeleteTodo, ActionsTypes } from '../types/action';

export const addTodo = (todo: string): AddTodo => {
    return {
        type: ActionsTypes.ADD_TODO,
        payload: { todo: todo }
    }
}

export const deleteTodo = (idx: number): DeleteTodo => {
    return {
        type: ActionsTypes.DELETE_TODO,
        payload: { idx: idx }
    }
}


