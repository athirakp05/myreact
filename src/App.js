import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={Home} />
      </Router>
      
    </div>
  )
}

export default App
