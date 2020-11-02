import React from 'react'
import { CheckCircleTwoTone, DeleteTwoTone} from "@ant-design/icons";
import PropTypes from 'prop-types'
import './ToDoItem.scss';

const ToDoItem = props => {
    const {todos, onToClickDelete, onToClickComplete} = props;

    const handleUserDelete = (todo) => {
        if(onToClickDelete){onToClickDelete(todo)}
    }

    const handleUserComplete = (todo) => {
        if(onToClickComplete){onToClickComplete(todo)}
    }

    return (
        <div className="todo-list">
        {    todos.map(todo => (
                <div
                    className = {todo.complete ? 'todo-list-item todo-list-complete' : 'todo-list-item'}
                >
                    <CheckCircleTwoTone onClick={()=>handleUserComplete(todo)} />
                    <p  key={todo.id}
                        className='title'
                    >{todo.title}</p>
                    <DeleteTwoTone 
                        onClick = {()=> handleUserDelete(todo)}
                    />
                </div>
            ))
        }
        </div>
    )
}

ToDoItem.propTypes = {
    todos: PropTypes.array,
    onToClickDelete : PropTypes.func,
    onToClickComplete : PropTypes.func,
}

ToDoItem.defaultProps = {
    todos: [],
    onToClick : null,
    onToClickComplete : null,
}

export default ToDoItem
