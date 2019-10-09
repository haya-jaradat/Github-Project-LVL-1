import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    // { repos.map((elem,index)=>{
    //   return (  <tr>
    //     <td>{this.props.repos.id}</td>
    //     <td>Smith</td>
    //     <td>50</td>
    //   </tr>
    //   )}
    //     )}
    return (
      <div style={{ border: '3px green dotted' }}>
      
 <table style={{ border: '1px solid black' }}>
  <tr>
    <th style={{  border: '1px solid black '}}>Number</th>
    <th style={{  border: '1px solid black '}}>Title</th>
    <th style={{  border: '1px solid black '}}>Repo Status</th>
    <th style={{  border: '1px solid black '}}>Check</th>
    <th style={{  border: '1px solid black '}}>isPrivate</th>
    <th style={{  border: '1px solid black '}}>Languge</th>
    <th style={{  border: '1px solid black '}}>Delete</th>
  </tr>
  <tr>
    <td  style={{  border: '1px solid black '}}>1</td>
    <td  style={{  border: '1px solid black '}}>Array</td>
    <td  style={{  border: '1px solid black '}}>Private</td>
    <td  style={{  border: '1px solid black '}}> <input type="checkbox"/></td>
    <td  style={{  border: '1px solid black '}}>Yes</td>
    <td  style={{  border: '1px solid black '}}>Html</td>
    <td  style={{  border: '1px solid black '}}>X</td>
  </tr>
</table>
      </div>
    );
  }
}
