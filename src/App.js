import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  render() {
    const {repos}=this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
         <Add />
         <Table repos={repos.id}/> 
      </div>
    );
  }
}
