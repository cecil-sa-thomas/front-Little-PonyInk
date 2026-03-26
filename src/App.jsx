import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Accueil from './pages/Accueil'
import FlashGalerie from './pages/flash/FlashGalerie'
import FlashReserver from './pages/flash/FlashReserver'
import ProjetSurMesure from './pages/ProjetSurMesure'
import Faq from './pages/Faq'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import MentionsLegales from './pages/MentionsLegales'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/flash-reserver' element={<FlashReserver/>}/>
        <Route path='/flash-galerie' element={<FlashGalerie/>}/>
        <Route path='/projet-sur-mesure' element={<ProjetSurMesure/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/mentions-legales' element={<MentionsLegales/>}/>
        <Route path='/politique-confidentialite' element={<PolitiqueConfidentialite/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}