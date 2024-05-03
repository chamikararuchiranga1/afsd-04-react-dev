export default function TextField ({type, onChange}) {
    return(
        <input type={type} onChange={(val)=> onChange(val)}/>
    )
}