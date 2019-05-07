import React from 'react';
import './App.css';

class Footer extends React.Component{
    clickHandler = () => {
        this.props.clearAllItem()
        console.log("hhh")
    }
    
    render(){
        return (
            <footer>
                <a href="#" id="clear-completed"  onClick={this.clickHandler}>clear {this.props.todoList.filter(function(item,index){return item.isDone}).length} completed item</a>
                <div className="todo-count">
                    <b>{this.props.todoList.filter(function(item,index){return !item.isDone}).length}</b> items left
                </div>
            </footer>
        )
    }
}

export default Footer