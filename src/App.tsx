import BeforeAfterGallery from './components/BeforeAfterGallery'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Process from './components/Process'
import QuoteForm from './components/QuoteForm'
import TrustBar from './components/TrustBar'
import UrgencyBanner from './components/UrgencyBanner'

export default function App() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfterGallery />
        <Process />
        <Pricing />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}