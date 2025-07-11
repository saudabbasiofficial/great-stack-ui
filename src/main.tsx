import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </StrictMode>,
)
