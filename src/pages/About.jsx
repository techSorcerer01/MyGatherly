import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();

  return (
    <div>
      About

      <button onClick={()=>{navigate('/dashboard')}}>Home</button>

    </div>
  )
}

export default About