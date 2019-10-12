import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Repo extends Component {
 
  render() {
    const {id,title,status,language}=this.props.repo;
    const {deleteRepo,edit}=this.props;
  
    return (
      <div style={{ border: '1px red solid' }}>
     
       
         <table class="table table-striped table-dark table-bordered">
       <tr >
    <th >{id}</th>
    <th >{title}</th>
    <th >{status === true ? 'PRIVATE' : 'PUBLIC'}}</th>
    <th ><input type="checkbox" /></th>
    <th >{status === true ? 'YES' : 'NO'}</th>
    <th >{language}</th>
    <button  onClick={deleteRepo.bind(this,id)}>X</button>
  </tr>
  </table>
      </div>
    );
  }
}

