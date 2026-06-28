// App.jsx (Updated - Footer on all pages)
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar'
import Herosection from './Components/Pages/Herosection'
import CodingLanguages from './Components/Pages/CodingLanguages'
import Cards from './Components/Pages/Cards'
import Ourclient from './Components/Pages/Ourclient'
import Footer from './Components/Pages/Footer'
import About from './Components/Pages/About'
import Service from './Components/Pages/Service'
import Teampage from './Components/Pages/Teampage'
import Contact from './Components/Pages/Contact'
import SeCards from './Components/Pages/servicesCards'
import Process from './Components/Pages/process'
import Start from './Components/Pages/Start'
// import Portfolio from './Components/Portfolio'
import Currer from './Components/Pages/CareersPage'
import Terms from './Components/Pages/Terms'  // Add this import

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Herosection />
                <CodingLanguages/>
                <Cards/>
                <SeCards />
                <Process />
                <Start />
                {/* <Ourclient /> */}
              </>
            } />
           
            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service/>} />
            {/* <Route path="/team" element={<Portfolio/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/careers" element={<Currer/>} />
            <Route path="/terms" element={<Terms/>} />  {/* Add Terms route */}
          </Routes>
        </main>
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App