import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App