import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './css/index.css'

import Join from './components/Join'
import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter> 
      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
    </BrowserRouter>
    
  );
}

export default App;
