import React from 'react';
import './App.css';
import Item from './item.js'

class Main extends React.Component{
    changeHandler = (e) => {
        this.props.selectAll(e.target.checked)
        this.props.changeAllCheckedStation(e.target.checked)
    }
    render(){
        const todoLists = this.props.todoList.map(function(item,index){
           return <Item key={index} item={item.item} isDone={item.isDone} index={index} changeTodoItem={this.props.changeTodoItem} deleteUselessItem={this.props.deleteUselessItem} isAllCheckedJudge={this.props.isAllCheckedJudge}/>
        },this)
        return (
            <section>
                <input type="checkbox" id="toggle" checked={this.props.isAllChecked} onChange={this.changeHandler}/>
                <label htmlFor="toggle" className="selectAll">Mark all as complete</label>
                 <ul id="todoList">
                    {todoLists}
                 </ul>
             </section>
        )
    }
}
export default Main