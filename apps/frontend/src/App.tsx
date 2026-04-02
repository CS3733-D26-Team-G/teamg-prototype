import { useState } from 'react'
import ContentForm from './components/ContentForm.tsx'
import EmployeeForm from './components/EmployeeForm'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  return (
    <>
      <div className='hero'>
        <HeroSection></HeroSection>
      </div>
      <div className='form-container'>
      </div>  
    </>
  )
}

export default App
