import React, { Component } from 'react';

class User extends Component {

  constructor(){
    super();
  }

  render() {
    const user = this.props.user;
    return <div class="user"><div>{user.name}</div> <div>{user.id}</div></div>;

  }
}

export default User;
