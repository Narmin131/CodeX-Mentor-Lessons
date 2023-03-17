import React, { Component } from 'react'
import users from '../data/User'
import Card from './Card'
export class Cards extends Component {


    render() {
        return (
            <div>
                {
                    users.map((item, index) => (
                        <Card user={item}/>
                    ))
                }
            </div>
        )
    }
}

export default Cards