import { TodoState } from '../types/state';
import { TodoAction } from '../types/action';

const initialState: TodoState = {
    todoList: [],
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            const todo = action.payload.todo;
            const newStateForADD = Object.assign({}, state);
            newStateForADD.todoList.push(todo);
            return newStateForADD;
        case 'DELETE_TODO':
            const idx = action.payload.idx;
            const newStateForDELETE = Object.assign({}, state);
            newStateForDELETE.todoList.splice(idx, 1);
            return newStateForDELETE;
        default:
            return state;
    }
};
