// import React from "react";
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, MapPin } from 'lucide-react';
import w01 from './assets/image/w01.jpg';
import w02 from './assets/image/w02.jpg';
import w03 from './assets/image/w03.jpg';
import logo from './assets/image/logo.png';
import close from './assets/icon/close.png'
import wvideo from './assets/video/wvideo.mp4'
import './self.css'
import ImageView from './components/ImageView';
const Header = () => (
  <header className='header'>
    <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src={logo} alt="BuildCo Logo" className="logo" />
        {/* <Building2 className='h-8 w-8 text-blue-600 mr-2' />
        <span className='text-xl font-bold text-gray-800'>BuildCo</span> */}
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
  <section id='home' className='bg-black text-white'>
    <div className='container mx-auto text-center relative'>
      <div style={{ position: 'relative' }}>
        <video src={wvideo} autoPlay loop muted className='video' />
        <div className='video_text'>
          像造汽车一样造房子
        </div>
        <div className='video_text_en'>
          Building Houses<br />
          Like Making Cars
        </div>
      </div>
      {/* <h1 className='text-4xl md:text-5xl font-bold mb-4'>Building Your Dreams, One Project at a Time</h1>
      <p className='text-xl mb-8'></p>
      <a href='#contact' className='bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300'>Get a Quote</a> */}
    </div>
  </section>
);

const Services = () => (
  <section id='services' className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>服务板块</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {['模块化建筑', '智能建造', '数字化交付'].map((service, index) =>
        (
          <div key={index} className='bg-white rounded-lg shadow-md p-6'>
            <svg className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{service}</h3>
            <p className='text-gray-600'>详细内容敬请关注</p>
          </div>
        )
        )}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const [flag, setFlag] = useState(-1)
  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>产品系列</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            w01, w02, w03
          ].map((img, index, list) => (
            <>
              <div key={index} onClick={() => setFlag(index)} className="relative overflow-hidden rounded-lg shadow-md group">
                <img src={img} alt={`Project ${index + 1}`} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold">项目预览</span>
                </div>
              </div>
              <div className='viewimg' style={{ display: flag === index ? 'flex' : 'none' }}>
                <img className='viewclose' src={close} onClick={() => { setFlag(9); console.log(index) }} />
                {/* <img className='view_img' src={list[2]} /> */}
                <ImageView index={index} imageUrls={list} />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
};

const Contact = () => (
  <section id='contact' className='bg-gray-100 py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>联系我们</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>联系方式</h3>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Phone className='h-5 w-5 text-gray-600 mr-2' />
              <span>+86 199 2520 3311</span>
            </li>
            <li className='flex items-center'>
              <Mail className='h-5 w-5 text-gray-600 mr-2' />
              <span>hlmarket@cohl.com</span>
            </li>
            <li className='flex items-center'>
              <MapPin className='h-5 w-5 text-gray-600' />
              <span>广东省深圳市福田区福田保税区蓝花道5号</span>
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="姓名" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="email" placeholder="邮箱" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea placeholder="写点什么..." rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">发送</button>
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
          <p>&copy; 2024 Wallflower</p>
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

const App = () => {
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
