import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import TopBar from './components/Topbar.tsx'
import Footer from './components/Footer.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'
import Mission from './pages/Mission.tsx'
import Login from './pages/Login.tsx'
import Registration from './pages/Registration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path ='/about' element={<About />}></Route>
        <Route path='/mission' element={<Mission />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>

  </StrictMode>,
)