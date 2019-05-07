import React from 'react';
import './App.css';

class Header extends React.Component{
    listChangeHandler = (e) => {
        let value = e.target.value
        if(e.keyCode ===13){
            let todoItem = {
                item:value,
                isDone:false
            }
            e.target.value = ""
            this.props.addTodoItem(todoItem)
        }
    }
    render(){
        return (
            <header>
            <h1>Todos</h1>
            <input type="text" placeholder="What needs to be done?" onKeyDown={this.listChangeHandler} />
           </header>
        )
    }
}
export default Header