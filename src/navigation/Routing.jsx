import React,{memo} from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'



//routes
import TestRoute from '../routes/test.route'


function Routing() {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<div>some data</div>}/>
            <Route path='/login'/>
            <Route path='/dashboard'>
                <Route path='home' element={<div>home</div>}></Route>
            </Route>


            {/* adding route for debuging components */}
            { process.env.NODE_ENV === 'development'  && <Route path='/TEST' element={<TestRoute/>}/>}
        
        </Routes>
    </Router>
  )
}

export default memo(Routing)