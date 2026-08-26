import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Video from './components/Video'
import Features from './components/Features'
import Gallery from './components/Gallery'
import FloorPlan from './components/FloorPlan'
import MoreInfo from './components/MoreInfo'
import Payment from './components/Payment'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileStickyCTA from './components/MobileStickyCTA'

function App() {
  return (
    <div className="bg-branco pb-14 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <FloorPlan />
        <Payment />
        <MoreInfo />
        <Video />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyCTA />
    </div>
  )
}

export default App
