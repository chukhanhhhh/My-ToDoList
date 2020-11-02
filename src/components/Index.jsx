import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Index.scss';
import ToDoItem from './ToDoItem/ToDoItem'
import ToDoForm from './ToDoForm/ToDoForm';


const Index = props => {
    const [todoList, setToDoList] = useState([
        {id: 1, title: 'Create an ToDo-list app with React', complete : false},
        {id: 2, title: 'Have a list to show todo items', complete : false},
        {id: 3, title: 'User can add new todo item with text', complete : false}
    ]); 

    // const [complete, setComplete] = useState(false);


    
    const handleToDoFormSumbit = (formValues)=>{
        console.log('Form submit:' , formValues);
        
        //  Add new todo to current todo List
        const newTodo = {
            ...formValues
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setToDoList(newTodoList);
    }
    
    const handleUserDelete = todo => {
         console.log(todo);
         const index = todoList.findIndex(key => key.id === todo.id)
         if(index < 0) return;

         const newToDoList = [...todoList];
         newToDoList.splice(index, 1);
         setToDoList(newToDoList);
    }

    const handleToDoFormSearch = (newFilter) => {
        
        console.log('newFilter: ', newFilter );
        const filterSearch = [...todoList];
        const resutls = filterSearch.filter(search =>  search.title === newFilter.resultSearch );
        setToDoList(resutls)
    }

    const handleUserComplete = (todo) => {

        const results = todoList.map((comp) => {
            if(comp.id === todo.id){
                return {...comp, complete : !comp.complete}
            }
            return comp
        })

        setToDoList(results);
    }
    return (
        <div className="index">
            <ToDoForm 
                onSubmit = {handleToDoFormSumbit}
                onSearch = {handleToDoFormSearch}
            />
            <ToDoItem  
                // complete = {todoList.comlete}
                todos={todoList}
                onToClickDelete = {handleUserDelete}
                onToClickComplete = {handleUserComplete}
            />
        </div>
    )
}

Index.propTypes = {
    todos: PropTypes.array,
    onToClick : PropTypes.func
};


export default Index
