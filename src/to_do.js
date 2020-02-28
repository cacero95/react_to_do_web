import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    console.log(todos);
    const todoList = todos.length > 0 ? (
        todos.map(todo=>{
            return(
                
                <div className="center collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}> {todo.content} </span>
                </div>
            )
        })
    ) : (
        <p className="center">You haven´t todo's left,</p>
    );
    return(
        <div className="todos colletion">
            {todoList}
        </div>
    )
}
export default Todos;