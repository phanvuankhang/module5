import {useIncrement} from "../hooks/useIncrement";
import React from "react";

export function Counter2() {
    const [count, setCount] = useIncrement(0)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(2)}>Add 2</button>
        </>
    )
}