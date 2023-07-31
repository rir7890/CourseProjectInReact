import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [v,vSet]=React.useState(0);
    
    function handleminus(){
        vSet(v-1);
    }
    function handleplus(){
        vSet(v+1);
    }
    
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleminus}>–</button>
            <div className="counter--count">
                <h1>{v}</h1>
            </div>
            <button className="counter--plus" onClick={handleplus}>+</button>
        </div>
    )
}
