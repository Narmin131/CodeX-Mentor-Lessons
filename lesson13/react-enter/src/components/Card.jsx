import React, { Component } from 'react'

export class Card extends Component {
  render() {
    const { name, email, username } = this.props.user;
    return (
      <div>
        <h1>User name :{name}</h1>
        <h2>User username : {username}</h2>
        <p>User email :{email}</p>
        <hr />
      </div>
    )
  }
}

export default Card