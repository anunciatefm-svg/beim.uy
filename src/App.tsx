import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Services from './components/Services'
import Wholesale from './components/Wholesale'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import SearchModal from './components/SearchModal'

function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <Navbar onSearch={() => setSearchOpen(true)} />
      <Hero />
      <Catalog />
      <Services />
      <Wholesale />
      <Footer />
      <FloatingButtons />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default App
