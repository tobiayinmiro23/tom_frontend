import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllPhotos, Photo, Login } from './AllFiles'
import './App.css'
import { appContext } from './Context'
import { useContext } from 'react';

function App() {
  const appData = useContext(appContext)



  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          {appData?.username !== '' && <Route path='/photos' element={<AllPhotos />} />}
          {appData?.username !== '' && <Route path='/photo/:id' element={<Photo />} />}
          <Route path='*' element={<h1 className='text-center mt-[8rem]'>route unavailable</h1>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
