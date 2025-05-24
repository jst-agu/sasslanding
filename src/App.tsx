import Footer from "./components/elements/Footer"
import { Layout } from "./components/Layout"
import AboutUs from "./components/sections/AboutUs"
import Brands from "./components/sections/Brands"
import CTA from "./components/sections/CallToAction"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
import Services from "./components/sections/Services"

function App() {

  return (
    <>
      <Layout title="JustChill Sass Landing Page - JstAgu">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <Pricing />
        <CTA />
        <Footer />
      </Layout>
    </>
  )
}

export default App
