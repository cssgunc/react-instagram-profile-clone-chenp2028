import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Profile.jsx'
import Navbar from "./Navbar.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
