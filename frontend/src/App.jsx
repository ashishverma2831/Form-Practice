import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {SnackbarProvider} from 'notistack'
import FileUpload from './components/FileUpload'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App