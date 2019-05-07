import React from 'react';
import './App.css';

class Item extends React.Component{
  constructor(props){
    super(props)
    this.todoItem = React.createRef()
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }
  changeHandler(e){
      let isDone = !this.props.isDone
      this.props.changeTodoItem(this.props.index,isDone)
      this.props.isAllCheckedJudge()
  }
  
  //delete clicked item
  clickHandler(e){
     // this.props.deleteUselessItem(this.todoItem)
     this.props.deleteUselessItem(this.props.index)
  }
  render(){
    let isDoneStyle = this.props.isDone?"done":""
    return(
      <li index={this.props.index} className={isDoneStyle}>
        <div className="view">
          <input type="checkbox" name="toggle" onChange={this.changeHandler} checked={this.props.isDone}/>
          <label>{this.props.item}</label>
        </div>
        <a href="#" className="destroy" onClick={this.clickHandler}>x</a>
      </li>
    )
  }
}

export default Item