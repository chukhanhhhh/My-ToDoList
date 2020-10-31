import React, {useState} from 'react'
import ToDoItem from './ToDoItem/ToDoItem';
import './Index.scss';



const Index = () => {
    const [dataInput, setDataInput] = useState("");
    const [text, setText] = useState([]);
    const [dataSearch, setDataSearch] = useState("");

    const handlerInput = (e) => {
        // console.log(e.target.value);
        setDataInput(e.target.value);
        setDataSearch(e.target.value);
    }

    const clickUserInput = (e) => {
        e.preventDefault();
        setText([
            ...text, {
                currentSearch: '',
                filterSearch: '',
                text: dataInput, 
                key: Math.floor(Math.random() * 30 )
            }
        ]);
        setDataInput("");
    }

    const handlerUserDelete = (newkey) => {
        const dataDelete = [...text];
        dataDelete.splice(dataDelete.filter(item => item.key === newkey), 1);
        setText(dataDelete);
    }

    const handlerUserSearch = (e) => {
        const checkdata = dataSearch;
        const filterData = [...text];
        const data =  filterData.text.filter(name => {
            return (name.text.includes(checkdata))
        })
        
        setText({
            data,
            currentSearch: checkdata
        })
        
    }
    
    const clickUserSearch = (e) => {
        const filterData = [...text];
        const itemSearch = filterData.currentSearch;
        const data = text.filter(name => {
            return (name.text.includes(itemSearch))
        })
        
        setText({
            data,
            currentSearch: itemSearch
        })

    }
    return (
        <div className="index">
            <div className="index-header">
                    <input 
                        requiredd
                        type="text"
                        placeholder="Jot do something"
                        className= "user-input"
                        handlerUserSearch = {handlerUserSearch}
                        onChange={handlerInput}
                        value={dataInput}
                    />    
                    <button className="user-button"
                            onClick={clickUserInput} >
                            Input
                    </button>
                    <button className="user-button"
                            onClick = {clickUserSearch}
                            >Search
                    </button>

                <div className="index-body-todolist">
                { 
                    text.map(u => <ToDoItem
                        handlerDelete = {handlerUserDelete}
                        TextInput={u.text} 
                        key={u.key}
                        />)
                }
                </div>    
            </div>

        </div>
    )
}

export default Index
