import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Courses from './components/courses/Courses'
import Placement from './components/placement/Placement'
import Contact from './components/contact/Contact'

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/placement' element={<Placement/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
