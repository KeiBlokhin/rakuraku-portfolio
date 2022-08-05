import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Courses from './pages/Courses'
import NewsLetter from './components/subscribeNewsletter/NewsLetter'
import Footer from './components/footer/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
      {/* <NewsLetter /> */}
      <Footer />
    </>
  )
}

export default App
