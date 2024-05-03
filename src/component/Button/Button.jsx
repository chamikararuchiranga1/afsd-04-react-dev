import './style.css'
// export default function Button (props) {
//     return (
//         <button style={{backgroundColor: props.bgColor}}>{props.name}</button>
//     )
// }

export default function Button({ bgColor, name, color, onClick }) {
    return (
        <button
            onClick={() => onClick()}
            className='btn'
            style={{ backgroundColor: bgColor, color: color }}>
            {name}
        </button>
    )
}
