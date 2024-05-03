import './style.css'
import Button from '../Button/Button'

export default function Detail({ bgcolor, name, description, address, age, submit }) {
    return (
        <div className='frame p-3 d-flex justify-content-center flex-wrap'>
            <h2 className='name' style={{ backgroundColor: bgcolor }}>
                {name}
            </h2>
            <p className='para'>{description}</p>
            <h4 className='detail' style={{ backgroundColor: bgcolor }}>
                Address: &nbsp; {address}
            </h4>
            <h4 className='detail' style={{ backgroundColor: bgcolor }}>
                Age: &nbsp; {age}
            </h4>
            <div className='name'>
                <Button name={'Submit'} onClick={submit} bgColor={bgcolor}/>
            </div>

        </div>
    )
}