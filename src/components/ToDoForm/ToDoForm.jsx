import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ToDoForm.scss';
// import ToDoItem from '../ToDoItem/ToDoItem'

const ToDoForm = ({onSubmit, onSearch}) => {
    // const {onSubmit, onSearch} = props;
    const [value, setValue] = useState('');
    const [resultSearch, setSearchResults] = useState('');

    const handleValueChange = (e) =>{
        console.log(e.target.value);
        setValue(e.target.value);
        setSearchResults(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!onSubmit) return;
        const formValues = {
            id: Math.floor(Math.random()*1000),
            title : value,
            complete : false
        };

        onSubmit(formValues);

        // Reset form
        setValue('');
    }


    const handleSearch = (e) => {
        e.preventDefault();
        if(!onSearch) return;
        const formSearchValues = {
            resultSearch
        };
        onSearch(formSearchValues);
    }

    return (
        <form className="form">
            <input type="text"
               name="" 
               id=""
               value={value}
               onChange={handleValueChange}
               placeholder="Jot add something"
               required
            />

            <button type="submit"
                    onClick = {handleSubmit}
            >Add</button>
            <button type="submit"
                    onClick = {handleSearch}
            >Search</button>

        </form>
    )
}

ToDoForm.propTypes = {
    onSubmit : PropTypes.func,
    onSearch : PropTypes.func,
    onReSearch : PropTypes.func,
}

ToDoForm.defaultProps = {
    onSubmit : null,
    onSearch : null,
}

export default ToDoForm
