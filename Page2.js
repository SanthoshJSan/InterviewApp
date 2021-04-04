import React from 'react';
import {withRouter,Redirect,Switch} from 'react-router-dom';
import './App.css'


 export class Page2 extends React.Component {
     constructor(){
         super();
         this.state={
             redirect:false
         }
     }
     setRedirect=()=>{
        localStorage.clear("tokens") 
        this.setState({redirect:true})
        
     }
    onclic=()=>{
       if(this.state.redirect){
           return <Redirect to="/"/>
    }}

    render(){
        var data=[
            {
              id: 1,
              name: "test1",
              age: "11",
              gender: "male",
              email: "test1@gmail.com",
              phoneNo: "9191919191"
            },
            {
              id: 2,
              name: "test2",
              age: "12",
              gender: "male",
              email: "test2@gmail.com",
              phoneNo: "9292929292"
            },
            {
              id: 3,
              name: "test3",
              age: "13",
              gender: "male",
              email: "test3@gmail.com",
              phoneNo: "9393939393"
            } 
          ];
  return(
    <div>
        {this.onclic()}
        <div className="button">
       <button onClick={this.setRedirect}>LOGOUT</button></div>
        {
          data.map(function(item,index){
            return  <table className="table">
              <tr><td>ID:</td><td>{data[index].id}</td></tr>
              <tr><td>NAME:</td><td>{data[index].name}</td></tr>
              <tr><td>AGE:</td><td>{data[index].age}</td></tr>
              <tr><td>GENDER:</td><td>{data[index].gender}</td></tr>
              <tr><td>EMAIL ID:</td><td>{data[index].email}</td></tr>
              <tr><td>PHONE NO.:</td><td>{data[index].phoneNo}</td></tr>
            </table>
          })
        }
      
    </div>
  )
  }} 
  export default withRouter(Page2);