import { useState } from "react";

export default function Text () {

    const [data, setData] = useState('');

    function changeText (val) {
        setData(val.target.value);
    }
    return(
        <div>
            <input type="text" onChange={(val)=> {changeText(val)}}/>
            <h1>{data}</h1>
        </div>
    
    )
}