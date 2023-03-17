import React from 'react'
import data from '../data/Data'
import Item from './Item'

const Items = () => {
    return (
        <div>
            {
                data.map((todo, index) => (
                    <Item id={todo.id}  title={todo.title} props={todo}/>
                ))
            }
        </div>
    )
}

export default Items