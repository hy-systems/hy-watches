import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, Search, ShoppingBag, Menu, ChevronRight, ShieldCheck, X, Instagram, Facebook, ArrowRight } from 'lucide-react'

const popularCollections = [
  { id: 1, title: 'LUCY PICKS', subtitle: 'Curated Archives', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg', link: '#' },
  { id: 2, title: 'DAYTONA', subtitle: 'Motorsport Heritage', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg', link: '#' },
  { id: 3, title: 'GMT-MASTER II', subtitle: 'Global Aviation', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg', link: '#' },
  { id: 4, title: 'NAUTILUS', subtitle: 'Structural Elegance', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5712-1a-001-tiffany-co-moon-phase-stainless-steel-patek-philippe-40740357636340.webp', link: '#' }
]

const productGrid = [
  { id: 1, title: 'Richard Mille RM67-02 Black Carbon TPT "BLUE TIFFANY"', specs: 'Carbon TPT / Automatic', price: '4.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png' },
  { id: 2, title: 'Richard Mille RM67-02 Full Black Carbon TPT NEW 2026', specs: 'Carbon TPT / Skeletonized', price: '4.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/07/13-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg' },
  { id: 3, title: 'Richard Mille RM67-01 Extra-Flat Titanium Handcrafted', specs: 'Grade 5 Titanium / Extra-Flat', price: '3.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/06/z7906650067246_19d6570c08bbd3dbe99f9dd1c5ebe25a-247x247.webp' },
  { id: 4, title: 'Patek Philippe Nautilus 5711A Green 40mm Custom', specs: 'Stainless Steel / Green Sunburst', price: '5.600', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/z7832313171371_7d87d006d198f4ebf69985070e6c4af7-247x247.webp' },
  { id: 5, title: 'Rolex Day Date 228239-0076 VIP Version', specs: '18kt White Gold / Ombre Dial', price: '920', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-14-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg' },
  { id: 6, title: 'Rolex Datejust 36 M126234-0057 VIP Version', specs: 'Oystersteel & Gold / Fluted', price: '820', img1: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png', img2: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png' }
]

const collectionGrid = [
  { colSpan: 'md:col-span-2 md:row-span-2', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg', title: 'RICHARD MILLE', subtitle: 'The Racing Machine' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg', title: 'ROLEX', subtitle: 'The Crown' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg', title: 'HUBLOT', subtitle: 'Art of Fusion' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg', title: 'PATEK PHILIPPE', subtitle: 'Geneva Tradition' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/audemars-piguet-royal-oak-selfwinding-15510st-oo-1320st-09-stainless-steel-green-dial-2025-audemars-piguet-1195982415.jpg', title: 'AUDEMARS PIGUET', subtitle: 'Le Brassus' }
]

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoWrapperRef = useRef<HTMLDivElement>(null)

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

    if (videoWrapperRef.current) {
      const heroVideo = videoWrapperRef.current.querySelector('video')
      if (heroVideo) {
        heroVideo.defaultMuted = true
        heroVideo.muted = true
        heroVideo.play().catch(() => {})
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#030303] text-[#f4f4f0] font-sans selection:bg-[#dbaf56] selection:text-[#030303] flex flex-col overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        :root { --accent: #dbaf56; }
        body { font-family: 'Inter', sans-serif; background-color: #030303; color: #f4f4f0; margin: 0; padding: 0; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Playfair Display', serif; }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #030303; }
        ::-webkit-scrollbar-thumb { background: #222; }
        ::-webkit-scrollbar-thumb:hover { background: #dbaf56; }
        
        .nav-link { position: relative; letter-spacing: 3px; font-size: 10px; font-weight: 400; text-transform: uppercase; overflow: hidden; color: #f4f4f0; transition: color 0.4s ease; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 100%; height: 1px; background-color: #dbaf56; transform: scaleX(0); transform-origin: right; transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
        .nav-link:hover { color: #dbaf56; }
        .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
        
        .btn-premium { position: relative; border: 1px solid rgba(255,255,255,0.15); padding: 14px 32px; letter-spacing: 3px; font-family: 'Inter', sans-serif; font-size: 10px; text-transform: uppercase; overflow: hidden; color: #f4f4f0; transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1); background: transparent; backdrop-filter: blur(10px); }
        @media (min-width: 768px) {
          .btn-premium { padding: 16px 48px; font-size: 11px; letter-spacing: 4px; }
        }
        .btn-premium::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #f4f4f0; transform: scaleX(0); transform-origin: right; transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1); z-index: -1; }
        .btn-premium:hover { border-color: #f4f4f0; color: #030303; }
        .btn-premium:hover::before { transform: scaleX(1); transform-origin: left; }

        .reveal-on-scroll { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        @media (min-width: 768px) {
          .reveal-on-scroll { transform: translateY(60px); transition-duration: 1.4s; }
        }
        .is-revealed { opacity: 1; transform: translateY(0); }
        
        .stagger-1 { transition-delay: 100ms; }
        .stagger-2 { transition-delay: 200ms; }
        .stagger-3 { transition-delay: 300ms; }

        .slow-zoom { animation: slowZoom 30s infinite alternate linear; }
        @keyframes slowZoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }

        .ambient-glow { position: absolute; width: 80vw; height: 80vw; background: radial-gradient(circle, rgba(219,175,86,0.04) 0%, transparent 60%); border-radius: 50%; pointer-events: none; z-index: 0; mix-blend-mode: screen; }
        @media (min-width: 768px) {
          .ambient-glow { width: 50vw; height: 50vw; background: radial-gradient(circle, rgba(219,175,86,0.03) 0%, transparent 60%); }
        }

        .img-zoom-hover img { transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1); }
        .img-zoom-hover:hover img { transform: scale(1.05); }
      `}} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'h-[70px] md:h-[80px] bg-[#030303]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'h-[90px] md:h-[120px] bg-gradient-to-b from-[#030303]/90 via-[#030303]/40 to-transparent'}`}>
        <div className="max-w-[1600px] mx-auto w-full h-full px-5 md:px-12 flex justify-between items-center">
          
          <div className="flex-shrink-0 z-50">
            <a href="#" className="font-serif uppercase tracking-[4px] md:tracking-[8px] text-lg md:text-2xl font-normal text-[#f4f4f0] hover:text-[#dbaf56] transition-colors duration-500">
              HY WATCHES
            </a>
          </div>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-full">
            <ul className="flex space-x-14 items-center h-full m-0 p-0">
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link">INVENTORY</a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link">
                  MANUFACTURES <ChevronDown className="ml-2 opacity-50 group-hover:rotate-180 transition-transform duration-500" size={10} />
                </a>
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 bg-[#050505]/95 backdrop-blur-3xl border border-white/5 shadow-2xl min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 py-6 z-50 translate-y-4 group-hover:translate-y-0">
                  {['Richard Mille', 'Patek Philippe', 'Audemars Piguet', 'Rolex', 'Hublot', 'Cartier'].map((brand) => (
                    <a key={brand} href="#" className="block px-10 py-3 text-[10px] tracking-[3px] uppercase text-gray-400 hover:bg-white/5 hover:text-[#f4f4f0] hover:pl-12 transition-all duration-300">{brand}</a>
                  ))}
                </div>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link">BESPOKE</a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center nav-link">CONCIERGE</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6 md:space-x-8 flex-shrink-0 z-50">
            <div className="hidden md:flex space-x-8">
              <Search className="cursor-pointer text-[#f4f4f0] hover:text-[#dbaf56] transition-colors duration-300" size={16} strokeWidth={1.5} />
              <ShoppingBag className="cursor-pointer text-[#f4f4f0] hover:text-[#dbaf56] transition-colors duration-300" size={16} strokeWidth={1.5} />
            </div>
            <Menu className="cursor-pointer text-[#f4f4f0] hover:text-[#dbaf56] transition-colors lg:hidden" size={22} strokeWidth={1.5} onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-2xl transition-opacity duration-500" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-full max-w-[400px] h-full bg-[#050505] border-r border-white/5 flex flex-col z-[101] transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
            <div className="flex justify-between items-center p-6 md:p-10 border-b border-white/5">
              <span className="font-serif uppercase tracking-[6px] font-normal text-lg text-white">INDEX</span>
              <X className="cursor-pointer text-gray-500 hover:text-white transition-colors" size={24} strokeWidth={1} onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-8 overflow-y-auto px-6 md:px-10 gap-6 md:gap-8">
              {['INVENTORY', 'MANUFACTURES', 'BESPOKE SERVICES', 'CONCIERGE', 'JOURNAL'].map((item, idx) => (
                <a key={item} href="#" className="font-serif uppercase text-xl md:text-2xl tracking-[3px] md:tracking-[4px] font-light text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="text-[10px] text-[#dbaf56] mr-4 md:mr-6 opacity-50 group-hover:opacity-100">0{idx + 1}</span>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow w-full pt-0">
        
        <div className="relative w-full h-[100svh] bg-[#050505] overflow-hidden flex items-center justify-center">
          <div 
            ref={videoWrapperRef}
            className="absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ __html: `
              <video class="w-full h-full object-cover opacity-60 slow-zoom pointer-events-none" preload="auto" playsinline="true" webkit-playsinline="true" autoplay="true" muted="true" loop="true" poster="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg">
                <source src="https://lucytimepieces.com/wp-content/uploads/2026/03/02.mp4" type="video/mp4" />
              </video>
            `}} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-transparent to-[#030303]"></div>
          
          <div className="relative z-10 text-center px-5 max-w-[900px] flex flex-col items-center mt-12 md:mt-0">
            <span className="text-[9px] md:text-[11px] lg:text-[13px] tracking-[4px] md:tracking-[6px] uppercase text-[#dbaf56] mb-4 md:mb-6 font-serif block opacity-0 animate-[fadeIn_2s_ease-out_forwards]">POPULAR COLLECTIONS</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-white font-serif drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[0.9] tracking-tight mb-8 md:mb-10 opacity-0 animate-[fadeInUp_1.5s_ease-out_0.5s_forwards]">SERIES ALPHA</h1>
            <div className="opacity-0 animate-[fadeInUp_1.5s_ease-out_1s_forwards]">
              <a href="#" className="btn-premium inline-flex items-center group">
                <span className="relative z-10 font-bold">EXPLORE NOW</span>
                <ChevronRight className="ml-2 md:ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform" size={14} />
              </a>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}} />
        </div>

        <div className="relative w-full bg-[#050505] py-4 md:py-6 border-b border-white/5 z-20">
          <div className="max-w-[1600px] mx-auto px-5 md:px-8 flex justify-center md:justify-between items-center">
            <p className="text-[#dbaf56] text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase font-sans m-0 items-center hidden md:flex">
              <ShieldCheck className="mr-3" size={14} strokeWidth={1.5} /> Insured Global Transit
            </p>
            <p className="text-gray-400 text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase font-sans m-0 flex items-center justify-center text-center">
              Complimentary Travel Case with Every Acquisition
            </p>
            <p className="text-[#dbaf56] text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase font-sans m-0 items-center hidden md:flex">
              Cryptocurrency &amp; Wire Accepted
            </p>
          </div>
        </div>

        <div className="relative w-full py-20 md:py-40 px-5 md:px-6 bg-[#030303] flex justify-center items-center">
          <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-[1000px] text-center flex flex-col items-center relative z-10 reveal-on-scroll">
            <div className="w-10 md:w-12 h-[1px] bg-[#dbaf56] mb-8 md:mb-12"></div>
            <h2 className="uppercase font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 tracking-[2px] font-normal text-[#f4f4f0] leading-tight">
              Elevating the standard of <br className="hidden sm:block" />Bespoke Horology.
            </h2>
            <p className="font-sans text-gray-500 text-xs md:text-base max-w-[600px] leading-[2] tracking-wide font-light">
              HY Watches provides unfiltered access to the world&apos;s most exclusive, technically profound, and aesthetically immaculate timepieces. We operate at the intersection of haute horlogerie and secure global logistics.
            </p>
          </div>
        </div>

        <section className="relative w-full py-16 md:py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-5 md:px-16 mb-12 md:mb-24 reveal-on-scroll">
            <span className="text-[#dbaf56] text-[9px] md:text-[10px] tracking-[4px] uppercase mb-3 md:mb-4 block font-sans">Archives</span>
            <h3 className="font-serif uppercase text-3xl md:text-5xl text-white font-normal tracking-[2px]">
              FEATURED SERIES
            </h3>
          </div>
          
          <div className="relative max-w-[1600px] mx-auto px-5 md:px-16 flex flex-col gap-20 md:gap-32">
            {popularCollections.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 reveal-on-scroll ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-[55%] aspect-[4/3] md:aspect-[3/2] overflow-hidden img-zoom-hover relative bg-[#0a0a0a]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/50 to-transparent"></div>
                </div>
                
                <div className="w-full md:w-[45%] flex flex-col justify-center px-2 md:px-0 text-center md:text-left items-center md:items-start">
                  <span className="text-[9px] md:text-[10px] tracking-[4px] text-gray-500 uppercase mb-4 md:mb-6 font-sans">{item.subtitle}</span>
                  <h4 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#f4f4f0] uppercase tracking-[2px] leading-tight mb-6 md:mb-8">
                    {item.title}
                  </h4>
                  <div className="w-12 md:w-16 h-[1px] bg-white/20 mb-8 md:mb-10"></div>
                  <a href={item.link} className="text-[10px] md:text-[11px] font-sans tracking-[3px] md:tracking-[4px] text-white uppercase hover:text-[#dbaf56] transition-colors flex items-center group w-max">
                    Discover Collection <ArrowRight className="ml-3 md:ml-4 transform group-hover:translate-x-2 transition-transform duration-300" size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full py-20 md:py-32 bg-[#030303] border-t border-white/5">
          <div className="ambient-glow top-0 right-0"></div>
          
          <div className="max-w-[1600px] mx-auto px-5 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 reveal-on-scroll">
            <div>
              <span className="text-[#dbaf56] text-[9px] md:text-[10px] tracking-[4px] uppercase mb-3 md:mb-4 block font-sans">Live Inventory</span>
              <h3 className="font-serif uppercase text-3xl md:text-5xl text-white font-normal tracking-[2px]">
                THE VAULT
              </h3>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-[10px] tracking-[4px] uppercase text-gray-400 hover:text-white transition-colors group pb-2 border-b border-white/10 hover:border-white">
              View All Assets <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform" size={12} />
            </a>
          </div>
          
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-5 md:px-16 relative z-10">
            {productGrid.map((product, index) => (
              <div key={product.id} className={`group cursor-pointer flex flex-col bg-[#050505] border border-white/5 hover:border-white/15 transition-colors duration-500 reveal-on-scroll stagger-${(index % 3) + 1}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#080808] p-8 md:p-12">
                  <img src={product.img1} className="absolute inset-0 w-full h-full object-contain p-8 md:p-12 transition-opacity duration-1000 opacity-100 group-hover:opacity-0" alt={product.title} />
                  <img src={product.img2} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-60" alt={`${product.title} alternative`} />
                  
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white text-black text-[8px] md:text-[9px] font-bold px-2.5 py-1 md:px-3 md:py-1.5 uppercase tracking-[3px]">
                    Available
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-[9px] md:text-[11px] tracking-[3px] md:tracking-[4px] text-white uppercase border border-white/30 px-6 py-3 md:px-8 md:py-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                      Acquire Asset
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col p-6 md:p-8 flex-grow justify-between">
                  <div>
                    <span className="font-sans text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[2px] md:tracking-[3px] mb-2 md:mb-3 block">{product.specs}</span>
                    <h4 className="font-sans text-[11px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-gray-300 group-hover:text-white transition-colors duration-300 font-light pr-2 md:pr-4">
                      {product.title}
                    </h4>
                  </div>
                  <p className="font-serif text-lg md:text-xl font-normal text-white mt-6 md:mt-8 tracking-wide">${product.price},000</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 flex justify-center md:hidden reveal-on-scroll">
            <a href="#" className="btn-premium">View All Assets</a>
          </div>
        </section>

        <section className="relative w-full py-20 md:py-32 bg-[#050505] border-t border-white/5">
          <div className="max-w-[1600px] mx-auto px-5 md:px-16 mb-12 md:mb-24 reveal-on-scroll">
            <span className="text-[#dbaf56] text-[9px] md:text-[10px] tracking-[4px] uppercase mb-3 md:mb-4 block font-sans">Partners &amp; Sourcing</span>
            <h3 className="font-serif uppercase text-3xl md:text-5xl text-white font-normal tracking-[2px]">
              MANUFACTURES
            </h3>
          </div>

          <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 px-5 md:px-16 h-auto md:h-[900px] reveal-on-scroll">
            {collectionGrid.map((item, idx) => (
              <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-[#030303] ${item.colSpan} min-h-[300px] md:min-h-[400px]`}>
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-[3s] cubic-bezier(0.19, 1, 0.22, 1) group-hover:scale-105 group-hover:opacity-70 grayscale-[50%] group-hover:grayscale-0" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute inset-4 md:inset-6 border border-white/5 pointer-events-none group-hover:scale-[0.98] transition-transform duration-700"></div>

                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-10 flex flex-col items-start">
                  <span className="text-gray-400 text-[8px] md:text-[9px] tracking-[3px] md:tracking-[4px] uppercase mb-3 md:mb-4 font-sans">{item.subtitle}</span>
                  <h2 className="font-serif text-white uppercase text-xl md:text-4xl font-normal tracking-[2px] leading-tight">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full py-20 md:py-32 bg-[#030303] border-t border-white/5 overflow-hidden">
          <div className="ambient-glow bottom-0 left-0"></div>
          
          <div className="max-w-[1600px] mx-auto px-5 md:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
              
              <div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-16 reveal-on-scroll">
                <span className="text-[#dbaf56] text-[9px] md:text-[10px] tracking-[4px] uppercase mb-3 md:mb-4 block font-sans">Digital Concierge</span>
                <h3 className="font-serif uppercase text-3xl md:text-4xl text-white font-normal tracking-[2px] mb-6 md:mb-8 leading-tight">
                  ACQUISITION<br/>INQUIRY
                </h3>
                <div className="w-10 md:w-12 h-[1px] bg-white/20 mb-6 md:mb-8"></div>
                <p className="font-sans text-gray-500 leading-[1.8] md:leading-[2] mb-8 md:mb-10 text-xs md:text-sm font-light">
                  Our private client advisory team is available to assist with specific references, unlisted inventory sourcing, and bespoke structural modifications. Initiate a secure dialogue to begin your procurement process.
                </p>
                <a href="#" className="btn-premium w-max text-center">
                  Request Consultation
                </a>
              </div>
              
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 reveal-on-scroll stagger-1">
                {[
                  { type: 'Journal', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg' },
                  { type: 'Instagram', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-055-bubba-watson-white-ceramic-richard-mille-1155978505.jpg' }
                ].map((social, idx) => (
                  <div key={idx} className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#050505] overflow-hidden group cursor-pointer border border-white/5">
                    <img src={social.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s] ease-out group-hover:opacity-80 grayscale" alt={social.type} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 flex items-center text-white font-sans text-[9px] md:text-[10px] tracking-[4px] uppercase">
                      <span className="w-4 md:w-6 h-[1px] bg-white mr-3 md:mr-4"></span> {social.type}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-[#030303] pt-20 md:pt-32 pb-8 md:pb-12 border-t border-white/5 flex-shrink-0 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 pb-16 md:pb-24 border-b border-white/10">
            
            <div className="flex flex-col sm:col-span-2 md:col-span-5 pr-0 md:pr-24 text-center sm:text-left items-center sm:items-start">
              <a href="#" className="font-serif uppercase tracking-[6px] md:tracking-[8px] text-xl md:text-2xl font-normal mb-6 md:mb-8 text-[#f4f4f0]">HY WATCHES</a>
              <p className="font-sans text-gray-500 text-[11px] md:text-[12px] leading-[1.8] md:leading-[2] font-light mb-8 md:mb-12 max-w-[400px] sm:max-w-none">
                Operating from Victoria, Australia, distributing finely crafted timepieces globally. Defining the intersection of mechanical art and modern luxury.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              </div>
            </div>

            <div className="flex flex-col md:col-span-3 text-center sm:text-left">
              <h3 className="font-sans uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] text-gray-400 mb-6 md:mb-8 font-normal">Contact Desk</h3>
              <div className="font-sans text-gray-500 text-[11px] md:text-[12px] space-y-4 md:space-y-6 font-light">
                <p>Melbourne, Victoria<br/>Australia</p>
                <p><a href="mailto:info.hywatches@gmail.com" className="hover:text-white transition-colors">info.hywatches@gmail.com</a></p>
                <p>WhatsApp: (+61) 000 000 000</p>
              </div>
            </div>

            <div className="flex flex-col md:col-span-2 text-center sm:text-left">
              <h3 className="font-sans uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] text-gray-400 mb-6 md:mb-8 font-normal">Legal</h3>
              <ul className="space-y-3 md:space-y-4 font-sans text-[11px] md:text-[12px] font-light">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Shipping Matrix</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Warranty Info</a></li>
              </ul>
            </div>

            <div className="flex flex-col md:col-span-2 text-center sm:text-left">
              <h3 className="font-sans uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] text-gray-400 mb-6 md:mb-8 font-normal">Navigation</h3>
              <ul className="space-y-3 md:space-y-4 font-sans text-[11px] md:text-[12px] font-light">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Inventory</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Manufactures</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Bespoke</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 md:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 text-center">
            <p className="font-sans text-[8px] md:text-[9px] text-gray-600 uppercase tracking-[3px] md:tracking-[4px]">
              ©2026 HY WATCHES. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 md:space-x-8">
              <span className="font-sans text-[8px] md:text-[9px] text-gray-600 uppercase tracking-[3px] md:tracking-[4px] flex items-center"><ShieldCheck className="mr-2" size={12} /> Encrypted</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
