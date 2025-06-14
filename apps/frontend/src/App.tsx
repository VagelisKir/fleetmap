import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<LoginPage />}/>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  )
}

export default App
