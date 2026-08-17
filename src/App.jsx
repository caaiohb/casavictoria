import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Video from './components/Video'
import Features from './components/Features'
import Gallery from './components/Gallery'
import FloorPlan from './components/FloorPlan'
import Technology from './components/Technology'
import Payment from './components/Payment'
import BuyerSupport from './components/BuyerSupport'
import Personalization from './components/Personalization'
import Timeline from './components/Timeline'
import Location from './components/Location'
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
        <Video />
        <Features />
        <Gallery />
        <FloorPlan />
        <Technology />
        <Payment />
        <BuyerSupport />
        <Personalization />
        <Timeline />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyCTA />
    </div>
  )
}

export default App
