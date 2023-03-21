import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);

    const addNumberHandler = () => {
        setCounter(counter + +number);
        setNumber('');
    }

    const resetHandler = () => {
        setCounter(0);
        setNumber('');
    }
    return (
        <>
            <div style={{ position:'absolute', background:'skyblue', height:'300px', width:'500px', marginLeft:'35%', borderRadius:'20px'}}>
            <div style={{position:'relative',left:'47.5%', background:'grey', color:'white', width:'80px', marginTop:'100px', marginRight:'100px'}}>{counter}</div>
            
            <div>
                <button style={{ background:'grey', color:'white'}} onClick={() => setCounter(counter - 1)
                }>-</button>
                <button style={{ background:'grey', color:'white', marginLeft:'10px'}} onClick={() => setCounter(counter + 1)
                }>+</button>
            </div>
            <div>
                <input type="number" style={{ background: 'grey', color: 'white', marginRight:'47px' }} onChange={(e) => setNumber(e.target.value)} value={number} />
                <button style={{ background:'grey', color:'white',  marginRight:'46px'}} onClick={addNumberHandler}>Add to counter</button>
            </div>
            <div>
                <button style={{ background: 'grey', color: 'white' }} onClick={resetHandler}>Reset</button>
                </div>
                </div>
        </>
         )
}

export default Counter;