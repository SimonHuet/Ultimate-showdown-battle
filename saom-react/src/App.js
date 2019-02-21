import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import postalController from'./Controller/PostalController';
import FirebaseService from'./Service/FirebaseService';
import User from'./Component/User';


class App extends Component {

  constructor(){

    super();
    this.state={users:[]};
    postalController.mainChannel.publish('players-load');
    postalController.mainChannel.subscribe('players-loaded',users=>{
      this.setState(() => {
             return {users:users}
         });
    });
  }

  render() {

    const users = this.state.users;
    // const listItems = users.map((user) =>
    //   <li>{user.name==undefined?'':user.name}</li>
    // );
    const listItems = users.map((user) =>
      <User user={user}/>
    );
    return listItems;
  }
}

export default App;
