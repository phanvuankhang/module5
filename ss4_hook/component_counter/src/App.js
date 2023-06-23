import './App.css'
import {useState} from "react";


export function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase(addAmount) {
        setCount(count + addAmount)
    }

    return (
        [count, increase]
    )
}

function Counter1() {
    const [count, setCount] = useIncrement(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(1)}>Add 1</button>
        </div>
    );
}

function Counter2() {
    const [count, setCount] = useIncrement(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(5)}>Add 2</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter1/>
            <Counter2/>
        </div>
    );
}

export default App;