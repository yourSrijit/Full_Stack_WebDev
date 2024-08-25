import FloatingShape from './components/FloatingShape'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignupPage'
import EmailVerificationPage from './pages/EmailVerificationPage'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0}/>
      <FloatingShape color='bg-green-500' size='w-48 h-48' top='40%' left='80%' delay={5}/>
      <FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-5%' delay={2}/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/verify' element={<EmailVerificationPage />}/>
      </Routes>
    </div>
  )
}

export default App

