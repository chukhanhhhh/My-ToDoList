import React, { useState } from 'react'
import { CheckCircleTwoTone, DeleteTwoTone, CloseCircleTwoTone} from "@ant-design/icons";
import PropTypes from 'prop-types'
import './ToDoItem.scss';

const ToDoItem = props => {
    const {todos, onToClick} = props;
    const [complete, setComplete] = useState(false);



    const handleUserDelete = (todo) => {
        if(onToClick){onToClick(todo)}
    }

    const handlerUserComplete = () => {
        setComplete({complete : !complete});
    }

    

    return (
        <div className="todo-list">
        {    todos.map(todo => (
                <div 
                    className= {
                        (complete) ?
                         'todo-list-item-complete'
                        :'todo-list-item'} 
                >
                    <CheckCircleTwoTone
                        onClick={handlerUserComplete}
                    />
                    <p  key={todo.id}
                        className="title"
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
    onToClick : PropTypes.func
}

ToDoItem.defaultProps = {
    todos: [],
    onToClick : null
}

export default ToDoItem
