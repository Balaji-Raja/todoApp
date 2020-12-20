import React from 'react';
import './ToDo.css';
class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          data : [
              "First option",
              "Second option"
          ],
          value: ''
        };
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
      }

    onChangeValue(event){
        event.preventDefault();
        this.setState({ value: event.target.value });
      }

    onClickClose(event){
        event.preventDefault();
        this.setState(state =>{ 
            const list = state.data.pop(state.value);
            return {
              list,
              value: ''
            };
          });
      }

    onClickAdd(event){
        event.preventDefault();
        this.setState(state => {
            const list = state.data.push(state.value);
            return {
              list,
              value: ''
            };
          });
      }

    render () {
            var items = this.state.data.map((item) => {
              return (
                  <tr className="table-row">
                <td className="table-data">&nbsp;{item}
                <button className ="delete" type="button" onClick={this.onClickClose}>Delete</button></td>
              </tr>
              );
            });
            return (
              <center className="todo-page"> 
              <h1 className="todo-head">Todo List</h1>
                <form className="todo-form">
                    <input className="box" type="text" value={this.state.value} placeholder="add a new todo..." onChange={this.onChangeValue}/>&nbsp;
                    <input type="submit" className="add" onClick={this.onClickAdd} value="Add"/>
                    <table className="table">{items}</table><br/>
                </form>
               </center>
            );
        }
}
export default ToDo;

