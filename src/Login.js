import './Login.css';
import React from 'react';
import { Redirect } from 'react-router-dom';
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      inputValue:'',
      password:'',
      openTodoList: false
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleUsername(event){
    this.setState({inputValue: event.target.value})
  }
  handlePassword(event){
    this.setState({password: event.target.value})
  }
  onSubmit(){
    if(this.state.inputValue == "balaji" && this.state.password == "0000")
    {
      // alert("Pavam " + this.state.inputValue)
      this.setState({openTodoList:true})  
      }

    else if(this.state.inputValue == "nandhini" && this.state.password == "0000")
    {
      // alert("Picsachu " + this.state.inputValue)
      this.setState({openTodoList:true})
    }
    else {
       alert("Username & Password does not match")
    }
  }


  render(){
    return(
      <center className="login-page">
      <h1 className="todo-heading">Todo App</h1>
      <br/>
        <br/>
        <br/>
        <br/>
      <form className="login">
        <br/>
        <input type="text" id="name" name="username" placeholder="Username" value = {this.state.inputValue} onChange={this.handleUsername}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="password" id="password" name="password" placeholder="Password" value={this.state.passsword} onChange={this.handlePassword}/>
        <br/>
        <br/>
        <br/>
        <input className="login-button" type="button" value="Login" onClick={this.onSubmit}/>
      </form>
      {this.state.openTodoList== true?(<Redirect to = '/todo' />):("")}
      </center>
    );
  }
}

export default Login;
