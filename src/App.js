import React from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoList : [],
      isAllChecked:false
    }
  }
  //add item
  addTodoItem = (item) => {
    this.setState({todoList:[...this.state.todoList,item]})
  }
  //change item state
  changeTodoItem = (index,state) => {
    let newTodoList = this.state.todoList
    newTodoList[index].isDone = state
    this.setState({todoList:newTodoList})
  }
  //delete useless item
  deleteUselessItem = (index) => {
    let newTodoList = this.state.todoList
    newTodoList.splice(index,1)
    this.setState({todoList:newTodoList})
  }
  //select all item
  selectAll = (isDone) => {
   let newTodoList = this.state.todoList
   let newTodoList2 = newTodoList.map(function(item,index){
     return {item:item.item,isDone:isDone}
   },this)
   this.setState({todoList:newTodoList2})
  }
  //change allSelected state
  changeAllCheckedStation = (isChecked) => {
    this.setState({isAllChecked:isChecked})
  }
  //all is done?
  isAllCheckedJudge = ()=>{
    if(this.state.todoList.every(function(item,index){return (item.isDone)})){
      this.setState({isAllChecked:true})
    }
    else this.setState({isAllChecked:false})
  }
  //clear all item
  clearAllItem = () => {
    //
    let newTodoList = this.state.todoList
    let newTodoList2 = newTodoList.filter(function(item,index){return !item.isDone})
    this.setState({todoList:newTodoList2,isAllChecked:false})
  }
  render(){
    return (
      <div className="container">
        <Header addTodoItem={this.addTodoItem}/>
        <Main todoList={this.state.todoList} changeTodoItem={this.changeTodoItem} deleteUselessItem={this.deleteUselessItem} selectAll={this.selectAll} isAllChecked={this.state.isAllChecked} isAllCheckedJudge={this.isAllCheckedJudge} changeAllCheckedStation={this.changeAllCheckedStation}/>
        <Footer clearAllItem={this.clearAllItem} todoList={this.state.todoList}/>
      </div>
    )
  }

}

export default App;
