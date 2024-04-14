import InterfacePage from './pages/Interface/InterfacePage'
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/interface" element={<InterfacePage />} />
    </Routes>
  )
}

export default App
