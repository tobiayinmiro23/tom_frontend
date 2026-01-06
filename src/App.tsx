import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllPhotos, Photo, Login } from './AllFiles'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/photos' element={<AllPhotos />} />
          <Route path='/photo/:id' element={<Photo />} />

          <Route path='*' element={<h1 className='text-center font-bold mt-[4rem]'>route unavailable</h1>} />
        </Routes>
      </Router>


    </>
  )
}

export default App
