import {Page2} from './Page2.js';
import './App.css';
import {BrowserRouter,Link, Route,Switch,Redirect,withRouter} from 'react-router-dom'
import { render } from 'react-dom';
import React from 'react';


class App extends React.Component{
  
 onSub=()=>{
    this.props.history.push('/Page2');};

 render(){
  return (
    <div className="App">
      <h1 >Home Page</h1>
      <div className="innerDiv">
        <form  onSubmit={this.onSub}>
          <input className="Elements" type="text" placeholder="Name" required></input><br></br>
          <input className="Elements" type="password" placeholder="Password" minLength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"  title="Password should contain at least one number,one uppercase letter,one lower case letter and one speacial character and should have a minimum length of 8 characters" required></input><br></br>  
         <input className="Elements" type="submit"/>
          </form>
      </div>
    </div>
  );
}}
export default withRouter(App);



