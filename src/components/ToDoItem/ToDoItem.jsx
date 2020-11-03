import React from 'react'
import { CheckCircleTwoTone, DeleteTwoTone, CloseCircleTwoTone} from "@ant-design/icons";
import PropTypes from 'prop-types'
import './ToDoItem.scss';



const ToDoItem = ({todos, onToClickDelete, onToClickComplete}) => {
    // const {todos, onToClickDelete, onToClickComplete} = props;

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
                    className = 'todo-list-item'
                >
                    {todo.complete ? <CloseCircleTwoTone onClick={()=>handleUserComplete(todo)}/> : <CheckCircleTwoTone onClick={()=>handleUserComplete(todo)}/>}
                    {/* <CheckCircleTwoTone onClick={()=>handleUserComplete(todo)} /> */}
                    <p  key={todo.id}
                        className={todo.complete ? 'title title-complete' : 'title'}
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
    onToClickDelete : null,
    onToClickComplete : null,
}

export default ToDoItem
