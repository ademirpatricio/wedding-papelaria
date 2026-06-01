import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Helmet } from 'react-helmet-async'

import HomeHero from '../components/blocs/HomeHero.jsx'
import HomeAbout from '../components/blocs/HomeAbout.jsx'
import HomeBenefits from '../components/blocs/HomeBenefits.jsx'
import HomeHowItWorks from '../components/blocs/HomeHowItWorks.jsx'
import HomeGallery from '../components/blocs/HomeGallery.jsx'
import HomePricing from '../components/blocs/HomePricing.jsx'
import HomeFaq from '../components/blocs/HomeFaq.jsx'
import HomeAboutMalabares from '../components/blocs/HomeAboutMalabares.jsx'
import HomeFinalCTA from '../components/blocs/HomeFinalCTA.jsx'
import Whatsapp from '../components/ui/Whatsapp.jsx'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Malabares Wedding • Papelaria e identidade visual para casamentos
        </title>

        <meta
          name="description"
          content="Papelaria personalizada para casamentos com identidade visual elegante, emocional e inesquecível."
        />

        <meta
          property="og:title"
          content="Malabares Wedding"
        />

        <meta
          property="og:description"
          content="Papelaria personalizada para casamentos."
        />

        <meta
          property="og:image"
          content="https://www.malabares.com.br/og-image.jpg"
        />

        <meta
          property="og:type"
          content="website"
        />

        <link
          rel="canonical"
          href="https://www.malabares.com.br/"
        />
      </Helmet>

      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
      <HomeHowItWorks />
      <HomeGallery />
      <HomePricing />
      <HomeFaq />
      <HomeAboutMalabares />
      <HomeFinalCTA />
      <Whatsapp />
    </>
  )
}

export default Home