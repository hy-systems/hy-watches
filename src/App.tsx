import React, { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe, ShoppingBag, Menu, ChevronLeft, ChevronRight, Star, Play, Package, CreditCard, ShieldCheck, X, Instagram, Facebook } from 'lucide-react'

const popularCollections = [
  { id: 1, title: 'LUCY PICKS', subtitle: 'HY PICKS', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg', link: '#' },
  { id: 2, title: 'DAYTONA', subtitle: 'POPULAR', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg', link: '#' },
  { id: 3, title: 'GMT-MASTER II', subtitle: 'POPULAR', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg', link: '#' },
  { id: 4, title: 'DATEJUST', subtitle: 'POPULAR', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg', link: '#' },
  { id: 5, title: 'NAUTILUS', subtitle: 'POPULAR', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5712-1a-001-tiffany-co-moon-phase-stainless-steel-patek-philippe-40740357636340.webp', link: '#' },
  { id: 6, title: 'RICHARD MILLE', subtitle: 'POPULAR', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-055-bubba-watson-white-ceramic-richard-mille-1155978505.jpg', link: '#' }
]

const productGrid = [
  { id: 1, title: 'Richard Mille RM67-02 Black Carbon TPT "BLUE TIFANY" Custom Modify', price: '4.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png' },
  { id: 2, title: 'Richard Mille RM67-02 Full Black Carbon TPT NEW 2026 Custom Modify', price: '4.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/07/13-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg' },
  { id: 3, title: 'Richard Mille RM67-01 Extra-Flat Titanium Handcrafted Version 2025', price: '3.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/06/z7906650067246_19d6570c08bbd3dbe99f9dd1c5ebe25a-247x247.webp' },
  { id: 4, title: 'Patek Philippe Nautilus 5711A Green 40mm Custom Modify 2026', price: '5.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/z7832313171371_7d87d006d198f4ebf69985070e6c4af7-247x247.webp' },
  { id: 5, title: 'Rolex Day Date 228239-0076 VIP Version', price: '920', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-14-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg' },
  { id: 6, title: 'Rolex Datejust 36 M126234-0057 VIP Version', price: '820', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png' },
  { id: 7, title: 'Rolex Datejust 126233-0017 VIP Version', price: '820', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png' },
  { id: 8, title: 'Rolex Datejust 126334-0010 Green Ombre New 2026 VIP Version', price: '720', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png' }
]

const collectionGrid = [
  { colSpan: 'md:col-span-2 md:row-span-2', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg', title: 'RICHARD MILLE', subtitle: 'Watches' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg', title: 'ROLEX', subtitle: 'Watches' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg', title: 'HUBLOT', subtitle: 'Watches' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg', title: 'PATEK PHILIPPE', subtitle: 'Watches' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/audemars-piguet-royal-oak-selfwinding-15510st-oo-1320st-09-stainless-steel-green-dial-2025-audemars-piguet-1195982415.jpg', title: 'AUDEMARS PIGUET', subtitle: 'Watches' }
]

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCollectionSlide, setActiveCollectionSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 50)
    window.addEventListener('scroll', handleScroll)
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const nextCollectionSlide = () => setActiveCollectionSlide((prev) => (prev + 1) % popularCollections.length)
  const prevCollectionSlide = () => setActiveCollectionSlide((prev) => (prev - 1 + popularCollections.length) % popularCollections.length)

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans selection:bg-[#dbaf56] selection:text-white flex flex-col overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        :root { --accent: #dbaf56; }
        body { font-family: 'Sarabun', sans-serif; background-color: #050505; color: #ffffff; margin: 0; padding: 0; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Roboto Condensed', sans-serif; }
        .font-mono { font-family: 'Lexend', sans-serif; }
        
        .nav-link { position: relative; letter-spacing: 2px; font-size: 12px; font-weight: 500; overflow: hidden; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 100%; height: 1px; background-color: #dbaf56; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-link:hover::after { transform: translateX(0); }
        
        .btn-premium { position: relative; border: 1px solid rgba(255,255,255,0.3); padding: 12px 32px; letter-spacing: 3px; font-family: 'Roboto Condensed'; text-transform: uppercase; overflow: hidden; color: white; transition: all 0.4s ease; background: transparent; backdrop-filter: blur(5px); }
        .btn-premium::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.7s ease; }
        .btn-premium:hover { border-color: #dbaf56; color: #dbaf56; box-shadow: 0 0 20px rgba(219, 175, 86, 0.15); }
        .btn-premium:hover::before { left: 100%; }

        .reveal-on-scroll { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-revealed { opacity: 1; transform: translateY(0); }
        
        .stagger-1 { transition-delay: 100ms; }
        .stagger-2 { transition-delay: 200ms; }
        .stagger-3 { transition-delay: 300ms; }

        .slow-zoom { animation: slowZoom 20s infinite alternate linear; }
        @keyframes slowZoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }

        .ambient-glow { position: absolute; width: 300px; height: 300px; background: radial-gradient(circle, rgba(219,175,86,0.08) 0%, transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; mix-blend-mode: screen; }

        .card-shimmer { position: relative; }
        .card-shimmer::after { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, transparent, rgba(255,255,255,0.03), transparent); transform: translateX(-100%); transition: transform 0.8s ease; }
        .card-shimmer:hover::after { transform: translateX(100%); }
      `}} />

      <div className="fixed right-4 bottom-6 z-[99] flex flex-col gap-4">
        <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 bg-[#111] border border-white/10 text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-12"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 bg-[#111] border border-white/10 text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black group">
          <Instagram size={20} className="transition-transform group-hover:scale-110" />
        </a>
      </div>

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'h-[75px] bg-black/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-white/5' : 'h-[100px] bg-gradient-to-b from-black/90 via-black/40 to-transparent'}`}>
        <div className="max-w-[1400px] mx-auto w-full h-full px-8 flex justify-between items-center">
          
          <div className="flex-shrink-0 w-[200px] z-50">
            <a href="#" className="font-serif uppercase tracking-[4px] text-2xl font-bold text-white hover:text-[#dbaf56] transition-all duration-500 hover:tracking-[6px]">
              HY WATCHES
            </a>
          </div>

          <nav className="hidden md:flex flex-grow justify-center h-full">
            <ul className="flex space-x-10 items-center h-full m-0 p-0">
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link text-white">SHOP</a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link text-white">
                  BRANDS <ChevronDown size={12} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 z-50 translate-y-4 group-hover:translate-y-0">
                  {['Rolex', 'Tudor', 'Hublot', 'Omega', 'Cartier', 'Patek Philippe', 'Audemars Piguet', 'Vacheron Constantin', 'Richard Mille', 'Jaeger Lecoultre', 'Franck Muller', 'IWC'].map((brand) => (
                    <a key={brand} href="#" className="block px-8 py-3 text-[13px] tracking-[1px] font-serif uppercase text-gray-400 hover:bg-white/5 hover:text-[#dbaf56] transition-colors">{brand}</a>
                  ))}
                </div>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link text-white">
                  COLLECTIONS <ChevronDown size={12} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 z-50 translate-y-4 group-hover:translate-y-0">
                  {['HY PICKS', 'CUSTOMIZE PRODUCTS', 'CUSTOMIZE DIAMOND', 'MEN\'S', 'WOMEN\'S'].map((col) => (
                    <a key={col} href="#" className="block px-8 py-3 text-[13px] tracking-[1px] font-serif uppercase text-gray-400 hover:bg-white/5 hover:text-[#dbaf56] transition-colors">{col}</a>
                  ))}
                </div>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link text-white">HOW TO ORDER</a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link text-white">
                  ABOUTS <ChevronDown size={12} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 z-50 translate-y-4 group-hover:translate-y-0">
                  {['INFO US', 'CONTACT', 'SOCIAL MEDIA'].map((item) => (
                    <a key={item} href="#" className="block px-8 py-3 text-[13px] tracking-[1px] font-serif uppercase text-gray-400 hover:bg-white/5 hover:text-[#dbaf56] transition-colors">{item}</a>
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6 flex-shrink-0 z-50">
            <Search size={18} className="cursor-pointer text-white/80 hover:text-[#dbaf56] transition-colors duration-300 hover:scale-110 transform" />
            <Globe size={18} className="cursor-pointer text-white/80 hover:text-[#dbaf56] transition-colors duration-300 hover:scale-110 transform" />
            <ShoppingBag size={18} className="cursor-pointer text-white/80 hover:text-[#dbaf56] transition-colors duration-300 hover:scale-110 transform" />
            <Menu size={24} className="cursor-pointer md:hidden text-white hover:text-[#dbaf56] transition-colors" onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-[85%] max-w-[360px] h-full bg-[#050505] border-l border-white/10 shadow-2xl flex flex-col z-[101] ml-auto transform transition-transform duration-500 ease-out">
            <div className="flex justify-between items-center p-8 border-b border-white/10">
              <span className="font-serif uppercase tracking-[3px] font-bold text-xl text-white">MENU</span>
              <X size={28} className="cursor-pointer text-gray-400 hover:text-[#dbaf56] transition-colors hover:rotate-90 transform duration-300" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-6 overflow-y-auto">
              <div className="px-8 pb-6 mb-4 border-b border-white/10">
                <div className="relative group">
                  <input type="text" placeholder="Search..." className="w-full border-b border-white/20 bg-transparent h-12 text-sm text-white focus:outline-none focus:border-[#dbaf56] transition-colors" />
                  <Search size={18} className="absolute right-0 top-3.5 text-gray-500 group-hover:text-[#dbaf56] transition-colors" />
                </div>
              </div>
              {['SHOP', 'BRANDS', 'COLLECTIONS', 'HOW TO ORDER', 'ABOUTS'].map((item) => (
                <a key={item} href="#" className="px-8 py-5 font-serif uppercase text-sm tracking-[2px] font-medium text-gray-300 hover:text-[#dbaf56] hover:pl-10 transition-all duration-300 border-b border-white/5">{item}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow w-full pt-0">
        
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
          <video className="absolute inset-0 w-full h-full object-cover opacity-60 slow-zoom pointer-events-none" preload="auto" playsInline autoPlay muted loop>
            <source src="https://lucytimepieces.com/wp-content/uploads/2026/03/02.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none"></div>
          
          <div className="relative z-10 text-center px-6 max-w-[900px] flex flex-col items-center">
            <span className="text-[11px] md:text-[13px] tracking-[6px] uppercase text-[#dbaf56] mb-6 font-serif block opacity-0 animate-[fadeIn_2s_ease-out_ forwards]">POPULAR COLLECTIONS</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-white font-serif drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.9] tracking-tight mb-10 opacity-0 animate-[fadeInUp_1.5s_ease-out_0.5s_forwards]">SERIES ALPHA</h1>
            <div className="opacity-0 animate-[fadeInUp_1.5s_ease-out_1s_forwards]">
              <a href="#" className="btn-premium inline-flex items-center group">
                <span className="relative z-10 font-bold">EXPLORE NOW</span>
                <ChevronRight size={16} className="ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}} />
        </div>

        <div className="relative w-full bg-[#0a0a0a] py-5 border-b border-white/10 z-20 shadow-[0_10px_30px_rgba(0,0,0,1)]">
          <p className="text-center text-gray-400 text-[10px] md:text-[12px] tracking-[4px] uppercase font-sans m-0 flex items-center justify-center">
            <span className="w-8 h-[1px] bg-[#dbaf56]/50 mr-4 hidden md:block"></span>
            Complimentary Travel Case with Every Watch Purchase
            <span className="w-8 h-[1px] bg-[#dbaf56]/50 ml-4 hidden md:block"></span>
          </p>
        </div>

        <div className="relative w-full py-24 md:py-36 px-6 bg-[#050505] overflow-hidden flex justify-center">
          <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"></div>
          <div className="max-w-[800px] text-center flex flex-col items-center relative z-10 reveal-on-scroll">
            <h2 className="uppercase font-serif text-4xl md:text-6xl mb-8 tracking-[3px] font-bold text-white leading-tight">
              Welcome to<br/>HY WATCHES
            </h2>
            <div className="w-16 h-[2px] bg-[#dbaf56] mb-8"></div>
            <p className="font-sans text-gray-400 text-lg md:text-xl mb-3 leading-relaxed tracking-wide font-light">
              Providing perfectly customized products.
            </p>
            <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed tracking-wide font-light">
              We also buy and appraise genuine watches and luxury items.
            </p>
          </div>
        </div>

        <section className="relative w-full py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col items-center reveal-on-scroll">
            <h3 className="font-serif uppercase text-3xl md:text-4xl text-white font-bold flex items-center tracking-[3px]">
              <span className="text-[#dbaf56] mr-4">-</span> POPULAR COLLECTIONS <span className="text-[#dbaf56] ml-4">-</span>
            </h3>
          </div>
          
          <div className="relative max-w-[1600px] mx-auto px-12 md:px-24 reveal-on-scroll stagger-1">
            <div className="flex overflow-hidden gap-8 h-[450px] md:h-[650px]">
              {popularCollections.map((item, index) => {
                let displayClass = 'hidden'
                if (index === activeCollectionSlide || index === (activeCollectionSlide + 1) % popularCollections.length || index === (activeCollectionSlide + 2) % popularCollections.length) {
                  displayClass = 'flex'
                }
                return (
                  <div key={item.id} className={`${displayClass} w-full md:w-1/3 relative group cursor-pointer overflow-hidden bg-[#111111] card-shimmer`}>
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.15] opacity-60 group-hover:opacity-90 grayscale-[20%] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full text-center z-10 px-6 py-12 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-[#dbaf56] text-[10px] md:text-xs tracking-[4px] uppercase mb-3 font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.subtitle}</p>
                      <h4 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-[2px] font-serif">{item.title}</h4>
                      <div className="w-0 h-[1px] bg-white mx-auto mt-6 transition-all duration-500 group-hover:w-12"></div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <button onClick={prevCollectionSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#dbaf56] hover:text-black hover:border-[#dbaf56] transition-all duration-300 z-20 hover:scale-110">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button onClick={nextCollectionSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#dbaf56] hover:text-black hover:border-[#dbaf56] transition-all duration-300 z-20 hover:scale-110">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="text-center mt-20 reveal-on-scroll stagger-2">
            <a href="#" className="btn-premium inline-flex items-center group">
              <span className="relative z-10 font-bold">SHOP ALL COLLECTION</span>
              <ChevronRight size={16} className="ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <section className="relative w-full py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
          <div className="ambient-glow top-0 right-0 w-[500px] h-[500px]"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col items-center reveal-on-scroll">
            <h3 className="font-serif uppercase text-3xl md:text-4xl text-white font-bold flex items-center tracking-[3px]">
              <span className="text-[#dbaf56] mr-4">-</span> YOU MIGHT ALSO LIKE <span className="text-[#dbaf56] ml-4">-</span>
            </h3>
          </div>
          
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-6 relative z-10">
            {productGrid.map((product, index) => (
              <div key={product.id} className={`product-card group cursor-pointer flex flex-col bg-transparent border border-white/5 p-6 hover:bg-[#0a0a0a] hover:border-white/10 transition-all duration-500 reveal-on-scroll stagger-${(index % 4)} card-shimmer`}>
                <div className="relative aspect-square overflow-hidden bg-transparent mb-6 mix-blend-screen">
                  <img src={product.img1} className="default-img absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-80 group-hover:opacity-0 scale-95 group-hover:scale-100 ease-out" alt={product.title} />
                  <img src={product.img2} className="hover-img absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-100 group-hover:scale-105 ease-out" alt={`${product.title} alt`} />
                  <div className="absolute top-0 left-0 bg-[#dbaf56] text-black text-[9px] font-bold px-3 py-1.5 uppercase tracking-[2px] shadow-lg">HOT</div>
                </div>
                <h4 className="font-mono text-[12px] md:text-[13px] leading-[1.8] text-center mt-2 text-gray-400 transition-colors duration-300 group-hover:text-white line-clamp-2 min-h-[46px] px-2 font-light">
                  {product.title}
                </h4>
                <div className="flex justify-center space-x-1.5 mt-5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} className="fill-[#dbaf56] text-[#dbaf56] opacity-80" />)}
                </div>
                <p className="font-serif text-xl md:text-2xl font-bold text-center text-white mt-auto pt-2 tracking-wide">${product.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full py-24 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col items-center reveal-on-scroll">
            <h3 className="font-serif uppercase text-3xl md:text-4xl text-white font-bold flex items-center tracking-[3px]">
              <span className="text-[#dbaf56] mr-4">-</span> HANDCRAFTED CNC <span className="text-[#dbaf56] ml-4">-</span>
            </h3>
          </div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 px-6 h-auto md:h-[800px] reveal-on-scroll stagger-1">
            {collectionGrid.map((item, idx) => (
              <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-[#050505] border border-white/5 ${item.colSpan} min-h-[350px] md:min-h-[auto] card-shimmer`}>
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-70 grayscale-[30%] group-hover:grayscale-0" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-70"></div>
                <div className="absolute bottom-10 left-10 right-10 z-10 flex flex-col items-start transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[#dbaf56] text-[10px] md:text-xs tracking-[4px] uppercase mb-3 font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.subtitle}</span>
                  <h2 className="font-serif text-white uppercase text-2xl md:text-3xl font-bold tracking-[3px] leading-tight">{item.title}</h2>
                  <div className="w-0 h-[2px] bg-[#dbaf56] mt-4 transition-all duration-700 ease-out group-hover:w-16"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20 reveal-on-scroll stagger-2">
            <a href="#" className="btn-premium inline-flex items-center group">
              <span className="relative z-10 font-bold">SHOP ALL WATCHES</span>
              <ChevronRight size={16} className="ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <section className="relative w-full py-28 bg-[#050505] border-t border-white/5 overflow-hidden">
          <div className="ambient-glow bottom-0 left-0 w-[600px] h-[600px]"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-28">
              
              <div className="flex flex-col justify-center reveal-on-scroll pr-8">
                <h3 className="font-serif uppercase text-3xl text-white font-bold flex items-center mb-8 tracking-[3px]">
                  <span className="text-[#dbaf56] mr-4">-</span> HY ON SOCIAL
                </h3>
                <p className="font-sans text-gray-400 leading-[1.8] mb-6 text-[15px] font-light">
                  Follow <strong className="text-white font-medium">HY Watches</strong> on TikTok, Instagram and Facebook for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
                </p>
                <p className="font-sans text-gray-400 leading-[1.8] text-[15px] font-light">
                  Every piece you see is filmed honestly so you can observe the finishing, proportions and wrist presence before making your decision.
                </p>
              </div>
              
              {[
                { type: 'TIKTOK', icon: <Play size={16} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/26240ST-TRANG.mov', link: '#' },
                { type: 'INSTAGRAM', icon: <Instagram size={16} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/01.mp4', link: '#' },
                { type: 'FACEBOOK', icon: <Facebook size={16} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4', link: '#' }
              ].map((social, idx) => (
                <div key={idx} className={`flex flex-col reveal-on-scroll stagger-${idx + 1}`}>
                  <a href={social.link} className="flex items-center text-white font-serif font-bold uppercase tracking-[3px] mb-6 hover:text-[#dbaf56] transition-colors text-xs">
                    <span className="mr-3 text-[#dbaf56]">{social.icon}</span> {social.type} <ChevronRight size={14} className="ml-2 opacity-50" />
                  </a>
                  <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/5 rounded-sm">
                    <video className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[1.5s] ease-out group-hover:opacity-90" preload="auto" playsInline autoPlay muted loop>
                      <source src={social.videoSrc} />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-md bg-black/30 group-hover:bg-[#dbaf56] group-hover:text-black group-hover:border-[#dbaf56] transition-all duration-500 transform group-hover:scale-110 shadow-lg">
                        <Play size={20} className="ml-1 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 border-t border-white/10 reveal-on-scroll">
              <div className="flex flex-col items-center text-center px-6">
                <Package size={40} strokeWidth={1} className="text-[#dbaf56] mb-8" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg text-white mb-4">Free Shipping</h4>
                <p className="font-sans text-gray-400 leading-[1.8] max-w-[320px] text-[14px] font-light">Free worldwide shipping via <strong className="text-white font-medium">FedEx, DHL, UPS</strong>, delivered securely within <strong className="text-white font-medium">7-14 days</strong>.</p>
              </div>
              <div className="flex flex-col items-center text-center px-6 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0">
                <CreditCard size={40} strokeWidth={1} className="text-[#dbaf56] mb-8" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg text-white mb-4">Pay Before Delivery</h4>
                <p className="font-sans text-gray-400 leading-[1.8] max-w-[320px] text-[14px] font-light">Easy and secure payments via <strong className="text-white font-medium">PayPal, Crypto, Visa & MasterCard</strong>. 100% safe and protected.</p>
              </div>
              <div className="flex flex-col items-center text-center px-6 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0">
                <ShieldCheck size={40} strokeWidth={1} className="text-[#dbaf56] mb-8" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg text-white mb-4">Warranty & Returns</h4>
                <p className="font-sans text-gray-400 leading-[1.8] max-w-[320px] text-[14px] font-light"><strong className="text-white font-medium">2-5 year warranty</strong> on all products. <strong className="text-white font-medium">100% replacement</strong> within <strong className="text-white font-medium">7 days</strong> for delivery defects.</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="w-full bg-[#030303] pt-24 border-t border-white/10 flex-shrink-0 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 pb-20">
            
            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[4px] text-2xl font-bold mb-8 text-white">HY WATCHES</h3>
              <p className="font-sans text-gray-500 text-[14px] leading-[1.8] pr-4 font-light">
                Confidently operating from our headquarters in <strong className="text-gray-300 font-medium">Australia</strong>, we are proud to be trusted and selected to distribute <strong className="text-[#dbaf56] font-medium">finely crafted products of exceptional quality</strong> to customers worldwide, helping to elevate the luxury experience and make premium products more accessible than ever.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-8 text-white">CONTACT INFO</h3>
              <div className="font-sans text-gray-500 text-[14px] space-y-4 font-light">
                <p><strong className="text-white font-medium uppercase tracking-[1px] text-xs">HY SYSTEMS Australia</strong><br/><span className="mt-2 inline-block">Australia</span></p>
                <p className="pt-2"><strong className="text-white font-medium tracking-[1px] text-xs uppercase">Email</strong><br/><a href="mailto:info.hywatches@gmail.com" className="hover:text-[#dbaf56] transition-colors mt-1 inline-block">info.hywatches@gmail.com</a></p>
                <p><strong className="text-white font-medium tracking-[1px] text-xs uppercase">WhatsApp</strong><br/><span className="hover:text-[#dbaf56] transition-colors cursor-pointer mt-1 inline-block">(+61) 000 000 000</span></p>
              </div>
              <div className="flex space-x-4 mt-10">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black transition-all duration-300"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black transition-all duration-300"><Facebook size={16} /></a>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-8 text-white">MORE INFO</h3>
              <ul className="space-y-4 font-sans text-[14px] font-light">
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> Social Media</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> How To Order</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> Payment Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> Shipping Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-all flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:w-6 group-hover:bg-[#dbaf56] transition-all"></span> Service & Warranty</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-8 text-white">COLLECTIONS</h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-6 font-sans text-[14px] font-light">
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">All Collections</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Hublot</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Rolex</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Cartier</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Omega</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Tudor</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Patek Philippe</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Audemars Piguet</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Vacheron</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#dbaf56] transition-colors block">Richard Mille</a></li>
              </ul>
            </div>

          </div>
        </div>
        
        <div className="w-full bg-black py-8 border-t border-white/5 text-center relative z-10">
          <div className="container mx-auto px-6">
            <p className="font-sans text-[10px] md:text-xs text-gray-600 uppercase tracking-[4px] font-medium">
              ©2026, HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
