import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Careers from './pages/Careers' // <-- Add this
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import CustomSoftwareDevelopment from './Components/Services/custom_software'
import AppDevelopment from './Components/Services/app_development'
import CloudSolutions from './Components/Services/cloud_solutions'
import WebDevelopment from './Components/Services/web_development'
import CybersecurityServices from './Components/Services/cybersecurity_services'
import ScrollToHashElement from './Components/ScrollToHashElement'

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="font-bold min-h-screen bg-[#071329] text-white w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} /> {/* <-- Add this */}
          <Route path="/custom-software" element={<CustomSoftwareDevelopment />} />
          <Route path="/custom_software" element={<CustomSoftwareDevelopment />} />
          <Route path="/custom_soctware" element={<CustomSoftwareDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/app_development" element={<AppDevelopment />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/cloud_solutions" element={<CloudSolutions />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web_development" element={<WebDevelopment />} />
          <Route path="/cybersecurity" element={<CybersecurityServices />} />
          <Route path="/cybersecurity-services" element={<CybersecurityServices />} />
          <Route path="/cybersecurity_services" element={<CybersecurityServices />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App