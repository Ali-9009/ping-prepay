import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'


import ScrollToTop from "./ScrollToTop";
import Industries from './pages/Industries'
import Feature from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Enterprise from './pages/Enterprise'
import Swift from './pages/CaseStudyDetail'
import CaseStudyDetail from './pages/CaseStudyDetail'


function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<Industries />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
   
       
          </Routes>
        </main>

    <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App