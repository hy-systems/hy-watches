import React, { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe, ShoppingBag, Menu, ChevronLeft, ChevronRight, Star, Play, Package, CreditCard, ShieldCheck, X } from 'lucide-react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroSlides = [
    { id: 1, title: 'SERIES ALPHA', subtitle: 'POPULAR COLLECTIONS', imgSrc: 'https://placehold.co/1920x1080/1a1a1a/333333' },
    { id: 2, title: 'SERIES BETA', subtitle: 'NEW ARRIVALS', imgSrc: 'https://placehold.co/1920x1080/2a2a2a/444444' },
    { id: 3, title: 'CUSTOM WORKS', subtitle: 'LIMITED EDITION', imgSrc: 'https://placehold.co/1920x1080/0a0a0a/222222' }
  ]

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <main className="relative w-full min-h-screen bg-white">
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-[70px] bg-[#262626]/90 backdrop-blur-md' : 'h-[83px] bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto w-full h-full px-6 flex justify-between items-center">
          <div className={`font-serif uppercase tracking-[2.5px] text-2xl font-medium flex-shrink-0 transition-colors duration-300 ${isScrolled ? 'text-[#dbaf56]' : 'text-white'}`}>
            HY WATCHES
          </div>
          
          <nav className="hidden md:flex items-center">
            {['SHOP', 'BRANDS', 'COLLECTIONS', 'HOW TO ORDER', 'ABOUTS'].map((item) => (
              <a key={item} href="#" className={`flex items-center font-serif text-[12px] uppercase tracking-[2px] mx-3.5 transition-colors duration-200 hover:text-[#dbaf56] text-white`}>
                {item}
                {['SHOP', 'BRANDS', 'COLLECTIONS'].includes(item) && <ChevronDown size={12} className="ml-1" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Search size={16} className="text-white cursor-pointer hover:text-[#dbaf56]" />
            <Globe size={16} className="text-white cursor-pointer hover:text-[#dbaf56]" />
            <ShoppingBag size={16} className="text-white cursor-pointer hover:text-[#dbaf56]" />
            <Menu size={20} className="text-white cursor-pointer md:hidden" onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl flex flex-col z-[101]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="font-serif uppercase tracking-[2px] font-bold text-black">MENU</span>
              <X size={24} className="cursor-pointer text-black" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col p-6 space-y-6">
              {['SHOP', 'BRANDS', 'COLLECTIONS', 'HOW TO ORDER', 'ABOUTS'].map((item) => (
                <a key={item} href="#" className="font-serif uppercase text-sm tracking-[2px] text-black hover:text-[#dbaf56]">{item}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {heroSlides.map((item, index) => {
          let positionClasses = 'opacity-0 scale-90 z-0'
          if (index === activeSlide) {
            positionClasses = 'left-[20%] w-[60vw] h-[85vh] opacity-100 z-20 shadow-2xl scale-100'
          } else if (index === (activeSlide - 1 + heroSlides.length) % heroSlides.length) {
            positionClasses = 'left-[-20%] w-[40vw] h-[70vh] opacity-50 z-10 scale-90'
          } else if (index === (activeSlide + 1) % heroSlides.length) {
            positionClasses = 'left-[80%] w-[40vw] h-[70vh] opacity-50 z-10 scale-90'
          }

          return (
            <div key={item.id} className={`absolute transform transition-all duration-700 ease-in-out ${positionClasses}`}>
              <img src={item.imgSrc} className="w-full h-full object-cover" alt={item.title} />
            </div>
          )
        })}
        
        <div className="absolute inset-0 bg-black/30 z-30 pointer-events-none"></div>
        
        <div className="absolute z-40 flex flex-col items-center">
          <span className="text-[14px] md:text-[16px] tracking-[3px] uppercase text-white mb-2 font-serif">{heroSlides[activeSlide].subtitle}</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase text-white font-serif drop-shadow-lg text-center leading-tight">
            {heroSlides[activeSlide].title}
          </h1>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 z-40 flex justify-between w-full px-8 pointer-events-none">
          <button onClick={prevSlide} className="w-12 h-12 border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      <div className="relative w-full bg-black py-4 border-t border-white/10 z-30">
        <p className="text-center text-white text-[12px] tracking-[2.5px] uppercase font-sans">
          Complimentary Travel Case with Every Watch Purchase
        </p>
      </div>

      <section className="w-full py-16 bg-white px-6">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-serif uppercase text-3xl md:text-4xl mb-4 text-black">WELCOME TO HY WATCHES</h2>
          <p className="font-sans text-base text-gray-600">Providing perfectly customized products.</p>
          <p className="font-sans text-base text-gray-600 mt-1">We also buy and appraise genuine watches and luxury items.</p>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="flex items-center justify-center space-x-2 mb-10">
          <Menu size={24} className="text-black" />
          <h3 className="font-serif uppercase text-2xl text-black">YOU MIGHT ALSO LIKE</h3>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-[14px]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img src="https://placehold.co/600x600/e2e8f0/1a1a1a" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                <img src="https://placehold.co/600x600/cbd5e1/1a1a1a" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
              </div>
              <h4 className="font-mono text-[14px] uppercase text-center mt-2 text-black transition-colors duration-200 group-hover:text-[#dbaf56]">MODEL REFERENCE 0{item}</h4>
              <div className="flex justify-center space-x-1 mb-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} className="fill-black text-black" />)}
              </div>
              <p className="font-serif text-[18px] font-medium text-center text-black">0.000 $</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="flex flex-col items-center justify-center mb-10">
          <Menu size={24} className="mb-2 text-black" />
          <h3 className="font-serif uppercase text-2xl md:text-3xl text-black">HANDCRAFTED CNC</h3>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-[300px_300px] gap-4 px-[14px]">
          <div className="relative w-full h-full overflow-hidden group cursor-pointer bg-[#1a1a1a] flex items-end p-6 md:col-span-2 md:row-span-2">
            <img src="https://placehold.co/800x800/262626/ffffff" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="VIP SERIES" />
            <span className="relative z-10 font-serif text-white uppercase text-xl tracking-[2px]">VIP SERIES</span>
          </div>
          <div className="relative w-full h-full overflow-hidden group cursor-pointer bg-[#1a1a1a] flex items-end p-6 md:col-span-1 md:row-span-2">
            <img src="https://placehold.co/400x800/262626/ffffff" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="STANDARD CNC" />
            <span className="relative z-10 font-serif text-white uppercase text-xl tracking-[2px]">STANDARD CNC</span>
          </div>
          <div className="relative w-full h-full overflow-hidden group cursor-pointer bg-[#1a1a1a] flex items-end p-6 md:col-span-1 md:row-span-1">
            <img src="https://placehold.co/400x400/262626/ffffff" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="ACCESSORIES" />
            <span className="relative z-10 font-serif text-white uppercase text-xl tracking-[2px]">ACCESSORIES</span>
          </div>
          <div className="relative w-full h-full overflow-hidden group cursor-pointer bg-[#1a1a1a] flex items-end p-6 md:col-span-1 md:row-span-1">
            <img src="https://placehold.co/400x400/262626/ffffff" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="CUSTOM PARTS" />
            <span className="relative z-10 font-serif text-white uppercase text-xl tracking-[2px]">CUSTOM PARTS</span>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#f8f8f8]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-[14px]">
          <div className="flex flex-col justify-center pr-4">
            <div className="flex items-center space-x-2 mb-4">
              <Menu size={24} className="text-black" />
              <h3 className="font-serif uppercase text-xl text-black">HY WATCHES ON SOCIAL</h3>
            </div>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Follow HY Watches for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
            </p>
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[4/5] bg-gray-200 overflow-hidden group cursor-pointer">
              <img src="https://placehold.co/400x500/e2e8f0/1a1a1a" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Social Post" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play size={32} className="text-white drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-[14px] mt-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <Package size={40} strokeWidth={1.5} className="text-black" />
            <h4 className="font-serif uppercase tracking-[1px] text-lg text-black">Free Shipping</h4>
            <p className="font-sans text-sm text-gray-600">Free worldwide delivery within 7 to 14 days.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <CreditCard size={40} strokeWidth={1.5} className="text-black" />
            <h4 className="font-serif uppercase tracking-[1px] text-lg text-black">Secure Payments</h4>
            <p className="font-sans text-sm text-gray-600">100% safe and protected transactions.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <ShieldCheck size={40} strokeWidth={1.5} className="text-black" />
            <h4 className="font-serif uppercase tracking-[1px] text-lg text-black">Warranty & Returns</h4>
            <p className="font-sans text-sm text-gray-600">2 year warranty on all products.</p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#f9f9f9] pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-[14px]">
          <div>
            <h4 className="font-serif uppercase tracking-[2px] text-lg mb-6 text-black">HY WATCHES</h4>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Confidently distributing finely crafted products of exceptional quality to customers worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-serif uppercase tracking-[2px] text-lg mb-6 text-black">CONTACT INFO</h4>
            <div className="font-sans text-sm text-gray-600 space-y-2">
              <p>80 Albert Avenue</p>
              <p>Boronia, VIC 3155</p>
              <p>support@hywatches.com</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <span className="text-gray-600 cursor-pointer hover:text-[#dbaf56]">INST</span>
              <span className="text-gray-600 cursor-pointer hover:text-[#dbaf56]">FB</span>
              <span className="text-gray-600 cursor-pointer hover:text-[#dbaf56]">MAIL</span>
            </div>
          </div>
          <div>
            <h4 className="font-serif uppercase tracking-[2px] text-lg mb-6 text-black">MORE INFO</h4>
            <div className="flex flex-col space-y-3 font-sans text-sm">
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Social Media</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">How To Order</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Payment Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Shipping Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Privacy Policy</a>
            </div>
          </div>
          <div>
            <h4 className="font-serif uppercase tracking-[2px] text-lg mb-6 text-black">COLLECTIONS</h4>
            <div className="flex flex-col space-y-3 font-sans text-sm">
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">All Collections</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Series Alpha</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Series Beta</a>
              <a href="#" className="text-gray-600 hover:text-[#dbaf56]">Custom Works</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-gray-200 text-center flex flex-col items-center">
          <p className="font-sans text-xs text-gray-400">©2026 HY WATCHES. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
