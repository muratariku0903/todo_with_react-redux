export enum ActionsTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
}

export type AddTodo = {
    type: ActionsTypes.ADD_TODO;
    payload: { todo: string }
}

export type DeleteTodo = {
    type: ActionsTypes.DELETE_TODO;
    payload: { idx: number }
}

export type TodoAction = AddTodo | DeleteTodo;
