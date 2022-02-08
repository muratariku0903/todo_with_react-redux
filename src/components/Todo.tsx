import React from 'react';
import { useState } from 'react';

type Todo = {
    todo: {
        todoList: string[];
    },
    addTodo: (todo: string) => void,
    deleteTodo: (idx: number) => void,
}

const Todo: React.FC<Todo> = (props) => {
    const [input, setInput] = useState<string>('');
    const list = props.todo.todoList;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const onClickAdd = () => {
        props.addTodo(input);
    }

    const onClickDelete = (idx: number) => {
        props.deleteTodo(idx);
    }

    return (
        <div>
            <input type="text" onChange={onChange} />
            <button onClick={onClickAdd}>追加</button>
            <ul>
                {list.map((el, idx) => {
                    return (
                        <li key={idx}>{el}<button onClick={() => onClickDelete(idx)}>削除</button></li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todo;
