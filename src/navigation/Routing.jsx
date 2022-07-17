import React,{memo} from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'



function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<div>some data</div>}/>
            <Route path='/login'/>
            <Route path='/dashboard'>
                <Route path='home' element={<div>home</div>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default memo(Routing)