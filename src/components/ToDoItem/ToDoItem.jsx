import React, {useState} from 'react'
import {DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import './ToDoItem.scss';


const ToDoItem = ({TextInput, key, handlerDelete, }) => {
    const [isCheck, setCheck] = useState(false);
    const handleRemoveItem = (e) => {
        handlerDelete((deleteItem) => deleteItem.key === key);
    }



    const toggleClassComplete= (e) => {
        e.preventDefault();
        setCheck({isCheck : !isCheck})

        toggleClassReopen();
    }

    const toggleClassReopen = () => {
        setCheck({isCheck : !isCheck})
    }



    return (
        <div className={(isCheck) ? 'complete-todolist' : "List-item"} 
        >
                <CheckCircleTwoTone onClick={toggleClassComplete}/>
                <p className="text">I am {TextInput}</p>
                <DeleteTwoTone onClick={handleRemoveItem}/>
                {/* <button onClick={handleRemoveItem}>Delete</button> */}
        </div>
    )
}

export default ToDoItem
