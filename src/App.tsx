import AuthRootComponent from './components/auth'
import InterfacePage from './pages/Interface/InterfacePage'
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/router/privateRoute'

function App() {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="interface" element={<InterfacePage />} />
      </Route>
      <Route path="login" element={<AuthRootComponent />} />
      <Route path="registration" element={<AuthRootComponent />} />
      <Route path="verification" element={<AuthRootComponent />} />
    </Routes>
  )
}

export default App