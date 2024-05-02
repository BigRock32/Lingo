import InterfacePage from '../pages/Interface/ui/InterfacePage'
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './router/privateRoute'
import { LoginPage } from '../pages/auth'
import { RegisterPage } from '../pages/auth'
import { VerificationPage } from '../pages/auth'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="interface" element={<InterfacePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegisterPage />} />
      <Route path="verification" element={<VerificationPage />} />
    </Routes>
  )
}

export default App