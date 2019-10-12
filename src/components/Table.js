import React, { Component } from 'react';
import Repo from './Repo'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Table extends Component {
  render() {
   const {repos}=this.props;
    // const{id,title}=repos;
    return (
      <div style={{ border: '3px green dotted' }}>
     
 <table class="table table-dark  table-bordered">
  <tr>
    <th scope="col">Number</th>
    <th scope="col">Title</th>
    <th scope="col">Repo Status</th>
    <th scope="col">Check</th>
    <th scope="col">isPrivate</th>
    <th scope="col">Languge</th>
    <th scope="col">Delete</th>
  </tr>
</table>
{ repos.map((elemt)=>{
      return ( 
        <Repo key={repos.id} repo={elemt} delete={this.props.deldel}/>
      )}
        )}
      </div>
    );
  }
}
