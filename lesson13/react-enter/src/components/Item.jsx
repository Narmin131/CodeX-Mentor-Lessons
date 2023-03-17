import React from 'react'

const Item = (props) => {
    return (
        <>
            <div>
                <h1>User id :{props.id}</h1>
                <p>User title : {props.title}</p>
            </div>
            <hr />
        </>
    )
}

export default Item