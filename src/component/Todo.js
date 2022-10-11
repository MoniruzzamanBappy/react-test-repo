import React from 'react';

const Todo = ({data}) => {
    const { id, title, completed } = data;
    const h1 = <h1>{title}</h1>;
    const p = completed ? <strike>{h1}</strike> : h1;
    return (
        <div data-testid={`todo-${id}`}>{p}</div>
    );
};

export default Todo;