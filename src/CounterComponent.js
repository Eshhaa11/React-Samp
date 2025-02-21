import { useState } from "react";
import Button from 'react-bootstrap/Button'

function CounterComponent() {
    let [count, setCount] = useState(1); 

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <div className="card-body text-center">
                    <HeaderComponent />
                    <ParagraphComponent />
                    <CounterControls count={count} setCount={setCount} /> 
                </div>  
            </div>
        </div> 
    );
}

function CounterControls({ count, setCount }) {
    return (
        <div>
            <h4 className="my-3">{count}</h4>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                <Button variant= "primary" onClick={() => setCount(count + 1)}>Add</Button>
                <Button variant= "danger" onClick={() => setCount(count - 1)}>Subtract</Button>
                <Button variant= "warning" onClick={() => setCount(count * 2)}>Double</Button>
               <button onClick={() => setCount(count - 1)}>Substract</button>
               <button onClick={() => setCount(count  * 1)}>Double</button>
               <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

function HeaderComponent() {
    return <h2 className="card-title">My First React App</h2>;
}

function ParagraphComponent() {
    return <p className="card-text">This is a simple counter inside a Bootstrap card.</p>;
}

export default CounterComponent;
