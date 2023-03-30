import React from 'react'
import { useState } from 'react'
const FunctionComponent = () => {


    const [counter, setCounter] = useState(0)

    const artir = () => {
        setCounter(counter + 1)
    }

    const azalt = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <button onClick={artir} >artir</button>
            <button onClick={azalt}>azalt</button>
            <span>{counter}</span>
        </div>
    )
}

export default FunctionComponent

// hooklar
// render metodu yoxdur
// daxilinde state saxlamir