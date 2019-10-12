import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  editRepo = (id)=>{
    let newedit=this.state.repos.map((element,index)=>{       
      if(id===element.id){
           if(element.status === "Public"){
             element.status="Private" 
           }
           else if (element.status==="Private"){
             element.status="Public"
              }
             }
       return element
   })
   this.setState({repos:newedit})
};

deleteRepo= ID => {
  console.log('id' ,ID);
  let newState= this.state.repos.filter(
    (elem, i)=>{
      return ID !== elem.id;
    }
  );
  this.setState({repos: newState});
}

  addRepo = (repo) =>{
    let newRepo = this.state.repos;
    newRepo.push(repo)
    this.setState({repos:newRepo});
  }

  render() {
    const {repos}=this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
         <Add addRepo={this.addRepo}/>
         {/* <button onClick={this.addRepo.bind(this,{id: 3,title:"fununun", status:"Public", language: 'fununun'})} style={{backgroundColor:"#EE126C"}}>fun buttons</button> */}

         <Table repos={repos} deleteRepo={this.deleteRepo} edit={this.editRepo}/> 
      </div>
    );
  }
}
