import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button/Button'
import Text from './component/Text/Text'
import TextField from './component/TextField/TextField'
import Number from './component/Number/Number'
import Detail from './component/Student/Student'
import Bootstrap from './pages/Bootrstrap/Bootstrap'
import Mui from './pages/MUI/Mui'
import Drower from './pages/Drower/Drower'

function App() {

  const student = [
    {
      name: 'Minali Wickramasinghe',
      bgcolor: '#eccc68',
      description: 'Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Like to Listning Music, Reading Books..',
      address: 'Kirindiwela',
      age: '25',
    },
    {
      name: 'Piyumi Kaveesha',
      bgcolor: '#ff7f50',
      description: 'Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Studying at Sabaragamuwa University ',
      address: 'Radawana',
      age: '26',
    },
    {
      name: 'Minali Wickramasinghe',
      bgcolor: '#eccc68',
      description: 'Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Like to Listning Music, Reading Books..',
      address: 'Kirindiwela',
      age: '25',
    },
    {
      name: 'Piyumi Kaveesha',
      bgcolor: '#ff7f50',
      description: 'Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Studying at Sabaragamuwa University ',
      address: 'Radawana',
      age: '26',
    },
    {
      name: 'Minali Wickramasinghe',
      bgcolor: '#eccc68',
      description: 'Went to Yasodara Devi Balika Maha Vidyalaya, Gampaha. Like to Listning Music, Reading Books..',
      address: 'Kirindiwela',
      age: '25',
    },
  ]

  const [name, setName] = useState(0);
  const [age, setage] = useState(true);

  useEffect(() => {
    console.log('ACPT');
  }, [name])

  function changeName() {
    setName(name + 1);
  }

  function printName() {
    console.log('====================================');
    console.log(name);
    console.log('====================================');
  }

  return (
    <div>
      {/* <button onClick={() => changeName()}>Click Name</button>
      <button onClick={() => printName()}>Print Name</button>
      <h1>{name}</h1>
      <h1>Chamikara Ruchiranga</h1>
      <h2>Beruwala</h2>
      <Text />
      <Number />
      <h1>Props</h1>
      <Button onClick={() => console.log('Click me')} name={'Click Me'} bgColor={'rgb(44, 7, 165)'} color={'red'} />
      <Button onClick={() => console.log('Add me')} name={'Add Me'} bgColor={'red'} />
      <Button onClick={() => console.log('Submit')} name={'Submit'} bgColor={'green'} />
      <br /><br />
      <TextField onChange={(val) => console.log(val.target.value)} type={'text'} />
      <br /><br />
      <TextField onChange={(val) => alert(val.target.value)} type={'password'} />

      <div>
        <h2>Student Details</h2>
        <div className='card'>
          {student.map((val, index) => (
            <Detail key={index} name={val.name} bgcolor={val.bgcolor}
              description={val.description}
              address={val.address}
              age={val.age} 
              submit={()=> alert(val.name)}/>
          ))}
        </div>
      </div> */}
      {/* <Bootstrap/> */}
      {/* <Mui/> */}
      <Drower/>
    </div>
  )
}

export default App
