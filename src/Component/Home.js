import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const[state, setState] = useState(0)
  function Increment(){
    setState(state + 1)
  }
  return (
    <div>
      <h1>Welcome</h1>
      {state}<br/>
      <Link to = '/about'>Click here</Link>
    </div>
  )
}

export default Home
