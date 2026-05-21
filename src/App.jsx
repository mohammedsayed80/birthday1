import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Music from './components/Music'
import Bg from './components/Bg'
import Time from './components/Time'
import Memo from './components/Memo'
import Message from './components/Message'
import Gift from './components/Gift'

const App = () => {
  return (
    <div>
        <Bg/>
        <Music/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/date' element={<Time/>}/>
            <Route path='/memories' element={<Memo/>}/>
            <Route path='/message' element={<Message/>}/>
            <Route path='/gift' element={<Gift/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App