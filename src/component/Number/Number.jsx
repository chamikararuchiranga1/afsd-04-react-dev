import { useState } from "react"

export default function Number () {

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState();

    function num1Num2() {
        const tot = parseInt(number1)+parseInt(number2)
        setTotal(tot)
    }
    return(
        <div>
            <input type="number" onChange={(val)=> setNumber1(val.target.value)}/>
            <br />
            <input type="number" onChange={(val)=> setNumber2(val.target.value)}/>
            <br />
            <button onClick={()=> num1Num2()}>Submit</button>
            <h1>{total}</h1>
        </div>
    )
}