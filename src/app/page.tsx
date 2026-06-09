import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import OrderProcess from "@/components/OrderProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Benefits />
      <Testimonials />
      <OrderProcess />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
