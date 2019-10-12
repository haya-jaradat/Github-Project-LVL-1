import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Add extends Component {
  state={
    title:"",
    language:"",
    status:"",
  };
  
 
  addNewRepo=()=>{

    let newRepo ={id:1,title:this.state.title, status:this.state.status, language: this.state.language}
    this.props.addRepo(newRepo);
    this.setState({title:"",language:"",status:""})
 };
 changeTitle=(event)=>{
  this.setState({title:event.target.value})
 };
 changeLanguage=(event)=>{
  this.setState({language:event.target.value})

 }
 changeState=(event)=>{
  this.setState({
    status: event.target.value

  })
}
  render() {
    const {addNewRepo,changeTitle,changeLanguage}=this
    const {title,language}=this.state
    return (
      
      <div style={{ border: '3px orange solid', textAlign: "center", marginBottom:"10px", }}>
        <h1>Add</h1>
        <from onSubmit={this.addRepo}>
        <input  placeholder="Title" onChange={changeTitle} value={title}></input>
        <input placeholder="language" onChange={changeLanguage} value={language}></input> 


        <select name="status" value={this.state.status} onChange={this.changeState}>
        <option selected  hidden >Choose</option>
             <option value="Private">Private</option>
            <option value="Public">Public</option>
        </select>


       {/* <button  type="submit" onClick={addNewRepo}>Add repo</button> */}
       <button type="submit" class="btn btn-dark"  onClick={addNewRepo}>Add repo </button>
       </from>
   </div>
     
    );
  }
}