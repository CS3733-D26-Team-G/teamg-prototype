import { useState } from 'react'
import ContentForm from './components/ContentForm.tsx'
import EmployeeForm from './components/EmployeeForm'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='form-container'>
        <EmployeeForm></EmployeeForm>
      </div>  
    </>
  )
}

export default App
