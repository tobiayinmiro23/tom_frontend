import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllPhotos, Photo, Login, UnAuthorised } from './AllFiles'
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
          {appData?.username !== '' ? <Route path='/photos' element={<AllPhotos />} /> : <Route path='/photos' element={<UnAuthorised />} />}
          {appData?.username !== '' ? <Route path='/photo/:id' element={<Photo />} /> : <Route path='/photo/:id' element={<UnAuthorised />} />}
          <Route path='*' element={<h1 className='text-center font-bold text-[1.4rem] mt-[4rem]'>route unavailable</h1>} />
        </Routes>
      </Router>


    </>
  )
}

export default App
