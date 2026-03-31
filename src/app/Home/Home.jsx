import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Transformations from '@/components/Transformations' // This is Before & After
import Testimonials from '@/components/Testimonials' // New
import Services from '@/components/Services' // New
// import Project from '@/components/Project' // Style Showcase
import Process from '@/components/Process' // New
import ContactForm from '@/components/ContactForm' // Updated Final CTA
import Brands from '@/components/Brands'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      
      <section id="about-us">
        <Transformations />
      </section>
      <section id="our-services">
        <Services />
      </section>
      <Showcase />
      <section id="process">
        <Process />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>


      {/* <section id="our-projects">
        <Project />
      </section> */}


      <section id="contact-us">
        <ContactForm />
      </section>

      {/* <section id="press">
        <Brands />
      </section> */}

      <Footer />
    </main>
  )
}

export default Home