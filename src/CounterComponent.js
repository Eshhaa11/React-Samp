import { useState } from "react";


function CounterComponent() {
    let [count, setCount] = useState(1); 

    return (
        <div>
            <HeaderComponent />
            <ParagraphComponent />
            <CounterControls count={count} setCount={setCount} /> 
           
        </div>
    );
}


function CounterControls({ count, setCount }) {
    const addCounter = () => {
        setCount(count + 1);
    };

    const subtractCounter = () => {
        setCount(count - 1);
    };

    const doubleCounter = () => {
        setCount(count * 2);
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={addCounter}>Add Counter</button>
            <button onClick={subtractCounter}>Subtract Counter</button>
            <button onClick={doubleCounter}>Double Counter</button>
            <button onClick={resetCounter}>Reset Counter</button>
        </div>
    );
}


function HeaderComponent() {
    return <h1>My First React App</h1>;
}

function ParagraphComponent() {
    return <p>This is a simple paragraph</p>;
}

export default CounterComponent;
