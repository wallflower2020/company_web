// import React from "react";
import { Building2, Facebook, Instagram, Linkedin, Mail, Phone, Twitter, MapPin } from 'lucide-react';

const Header = () => (
  <header className='bg-white shadow-md'>
    <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <Building2 className='h-8 w-8 text-blue-600 mr-2' />
        <span className='text-xl font-bold text-gray-800'>BuildCo</span>
      </div>
      <nav>
        <ul className='flex space-x-6'>
          <li><a href='#home' className='text-gray-600 hover:text-blue-600'>首页</a></li>
          <li><a href='#services' className='text-gray-600 hover:text-blue-600'>服务</a></li>
          <li><a href='#projects' className='text-gray-600 hover:text-blue-600'>案例</a></li>
          <li><a href='#contact' className='text-gray-600 hover:text-blue-600'>联系</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id='home' className='bg-blue-600 text-white py-20'>
    <div className='container mx-auto px-4 text-center'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4'>Building Your Dreams, One Project at a Time</h1>
      <p className='text-xl mb-8'></p>
      <a href='#contact' className='bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300'>Get a Quote</a>
    </div>
  </section>
);

const Services = () => (
  <section id='services' className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Our Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {['Residential Construction', 'Commercial Development', 'Infrastructure Projects'].map((service, index) =>
        (
          <div key={index} className='bg-white rounded-lg shadow-md p-6'>
            <svg className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{service}</h3>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet</p>
          </div>
        )
        )}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id='projects' className='py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl fron-bold text-center mb-12'>Our Project</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ].map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            <img src={img} alt={`Project ${index + 1}`} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-semibold">View Project</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id='contact' className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Get in Touch</h3>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Phone className='h-5 w-5 text-gray-600 mr-2' />
              <span>+1 (555) 555-5555</span>
            </li>
            <li className='flex items-center'>
              <Mail className='h-5 w-5 text-gray-600 mr-2' />
              <span>info@gmail.com</span>
            </li>
            <li className='flex items-center'>
              <MapPin className='h-5 w-5 text-gray-600' />
              <span>123 Construction</span>
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className='bg-gray-800 text-white py-8'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-4 md:mb-0'>
          <p>&copy; 2024 BuildCo.</p>
        </div>
        <div className='flex space-x-4'>
          <Facebook className='h-6 w-6 cursor-pointer hover:text-blue-400' />
          <Twitter className='h-6 w-6 cursor-pointer hover:text-blue-400' />
          <Instagram className='h-6 w-6 cursor-pointer hover:text-pink-500' />
          <Linkedin className='h-6 w-6 cursor-pointer hover:text-blue-600' />
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
