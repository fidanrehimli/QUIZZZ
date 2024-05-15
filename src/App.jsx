import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Offer from './pages/Offer/Offer'
import Menu from './pages/Menu/Menu'
import News from './pages/News/News'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/news' element={<News />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
