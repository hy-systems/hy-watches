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
    const handleScroll = () => setIsScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextCollectionSlide = () => setActiveCollectionSlide((prev) => (prev + 1) % popularCollections.length)
  const prevCollectionSlide = () => setActiveCollectionSlide((prev) => (prev - 1 + popularCollections.length) % popularCollections.length)

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-[#dbaf56] selection:text-white flex flex-col">
      
      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed right-4 bottom-6 z-[99] flex flex-col gap-3">
        <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-[#262626] border border-white/20 text-white hover:bg-[#dbaf56] hover:border-[#dbaf56]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-[#262626] border border-white/20 text-white hover:bg-[#dbaf56] hover:border-[#dbaf56]">
          <Instagram size={20} />
        </a>
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-[70px] bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'h-[90px] bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="max-w-[1200px] mx-auto w-full h-full px-6 flex justify-between items-center">
          
          <div className="flex-shrink-0 w-[200px]">
            <a href="#" className="font-serif uppercase tracking-[3px] text-2xl font-bold text-white hover:text-[#dbaf56] transition-colors duration-300">
              HY WATCHES
            </a>
          </div>

          <nav className="hidden md:flex flex-grow justify-center h-full">
            <ul className="flex space-x-8 items-center h-full m-0 p-0">
              <li className="relative group h-full flex items-center">
                <a href="#" className="text-[13px] font-bold tracking-[2px] uppercase text-white hover:text-[#dbaf56] transition-colors">
                  SHOP
                </a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center text-[13px] font-bold tracking-[2px] uppercase text-white hover:text-[#dbaf56] transition-colors">
                  BRANDS <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute top-[100%] left-0 bg-[#111111] border border-white/10 shadow-2xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  {['Rolex', 'Tudor', 'Hublot', 'Omega', 'Cartier', 'Patek Philippe', 'Audemars Piguet', 'Vacheron Constantin', 'Richard Mille', 'Jaeger Lecoultre', 'Franck Muller', 'IWC'].map((brand) => (
                    <a key={brand} href="#" className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white hover:text-black transition-colors">{brand}</a>
                  ))}
                </div>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center text-[13px] font-bold tracking-[2px] uppercase text-white hover:text-[#dbaf56] transition-colors">
                  COLLECTIONS <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute top-[100%] left-0 bg-[#111111] border border-white/10 shadow-2xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  {['HY PICKS', 'CUSTOMIZE PRODUCTS', 'CUSTOMIZE DIAMOND', 'MEN\'S', 'WOMEN\'S'].map((col) => (
                    <a key={col} href="#" className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white hover:text-black transition-colors">{col}</a>
                  ))}
                </div>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="text-[13px] font-bold tracking-[2px] uppercase text-white hover:text-[#dbaf56] transition-colors">
                  HOW TO ORDER
                </a>
              </li>
              <li className="relative group h-full flex items-center">
                <a href="#" className="flex items-center text-[13px] font-bold tracking-[2px] uppercase text-white hover:text-[#dbaf56] transition-colors">
                  ABOUTS <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute top-[100%] left-0 bg-[#111111] border border-white/10 shadow-2xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  <a href="#" className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white hover:text-black transition-colors">INFO US</a>
                  <a href="#" className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white hover:text-black transition-colors">CONTACT</a>
                  <a href="#" className="block px-6 py-2.5 text-sm text-gray-300 hover:bg-white hover:text-black transition-colors">SOCIAL MEDIA</a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-5 flex-shrink-0">
            <Search size={18} className="cursor-pointer text-white hover:text-[#dbaf56] transition-colors" />
            <Globe size={18} className="cursor-pointer text-white hover:text-[#dbaf56] transition-colors" />
            <ShoppingBag size={18} className="cursor-pointer text-white hover:text-[#dbaf56] transition-colors" />
            <Menu size={24} className="cursor-pointer md:hidden text-white hover:text-[#dbaf56] transition-colors" onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-[80%] max-w-[320px] h-full bg-[#111111] border-l border-white/10 shadow-2xl flex flex-col z-[101] ml-auto transform transition-transform duration-300">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-serif uppercase tracking-[2px] font-bold text-lg text-white">MENU</span>
              <X size={24} className="cursor-pointer text-gray-400 hover:text-[#dbaf56] transition-colors" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-4 overflow-y-auto">
              <div className="px-6 pb-4 mb-4 border-b border-white/10">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="w-full border border-white/20 bg-black h-12 px-4 text-sm text-white focus:outline-none focus:border-[#dbaf56] rounded-sm transition-colors" />
                  <Search size={18} className="absolute right-4 top-3.5 text-gray-400" />
                </div>
              </div>
              <a href="#" className="px-6 py-4 font-serif uppercase text-sm tracking-[1.5px] font-medium text-gray-300 hover:text-[#dbaf56] hover:bg-white/5 transition-colors border-b border-white/5">SHOP</a>
              <a href="#" className="px-6 py-4 font-serif uppercase text-sm tracking-[1.5px] font-medium text-gray-300 hover:text-[#dbaf56] hover:bg-white/5 transition-colors border-b border-white/5">BRANDS</a>
              <a href="#" className="px-6 py-4 font-serif uppercase text-sm tracking-[1.5px] font-medium text-gray-300 hover:text-[#dbaf56] hover:bg-white/5 transition-colors border-b border-white/5">COLLECTIONS</a>
              <a href="#" className="px-6 py-4 font-serif uppercase text-sm tracking-[1.5px] font-medium text-gray-300 hover:text-[#dbaf56] hover:bg-white/5 transition-colors border-b border-white/5">HOW TO ORDER</a>
              <a href="#" className="px-6 py-4 font-serif uppercase text-sm tracking-[1.5px] font-medium text-gray-300 hover:text-[#dbaf56] hover:bg-white/5 transition-colors">ABOUTS</a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow w-full">
        
        {/* HERO BANNER */}
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
          <video className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" preload="auto" playsInline autoPlay muted loop>
            <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none"></div>
          <div className="relative z-10 text-center px-6 max-w-[800px] flex flex-col items-center">
            <span className="text-[12px] md:text-[14px] tracking-[4px] uppercase text-gray-300 mb-4 font-serif block">POPULAR COLLECTIONS</span>
            <h1 className="text-5xl md:text-8xl font-bold uppercase text-white font-serif drop-shadow-2xl leading-none tracking-wide mb-6">SERIES ALPHA</h1>
            <a href="#" className="border-2 border-white px-8 py-3 text-sm font-serif uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-300">EXPLORE NOW</a>
          </div>
        </div>

        {/* ANNOUNCEMENT BAR */}
        <div className="relative w-full bg-[#111111] py-4 border-t border-b border-white/10 z-20">
          <p className="text-center text-gray-300 text-[11px] md:text-[13px] tracking-[3px] uppercase font-sans m-0">
            Complimentary Travel Case with Every Watch Purchase
          </p>
        </div>

        {/* WELCOME SECTION */}
        <div className="w-full py-20 md:py-28 px-6 bg-black border-b border-white/10 flex justify-center">
          <div className="max-w-[800px] text-center flex flex-col items-center">
            <h2 className="uppercase font-serif text-3xl md:text-5xl mb-6 tracking-[2px] font-bold text-white">
              Welcome to HY WATCHES
            </h2>
            <p className="font-sans text-gray-400 text-lg md:text-xl mb-2 leading-relaxed">
              Providing perfectly customized products.
            </p>
            <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed">
              We also buy and appraise genuine watches and luxury items.
            </p>
          </div>
        </div>

        {/* POPULAR COLLECTIONS SLIDER */}
        <section className="w-full py-20 bg-[#0a0a0a]">
          <div className="max-w-[1200px] mx-auto px-6 mb-12 flex flex-col items-center">
            <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-[2px]">
              <Menu className="mr-3 text-[#dbaf56]" size={28} /> POPULAR COLLECTIONS
            </h3>
          </div>
          
          <div className="relative max-w-[1400px] mx-auto px-12 md:px-20">
            <div className="flex overflow-hidden gap-6 h-[400px] md:h-[550px]">
              {popularCollections.map((item, index) => {
                let displayClass = 'hidden'
                if (index === activeCollectionSlide || index === (activeCollectionSlide + 1) % popularCollections.length || index === (activeCollectionSlide + 2) % popularCollections.length) {
                  displayClass = 'flex'
                }
                return (
                  <div key={item.id} className={`${displayClass} w-full md:w-1/3 relative group cursor-pointer overflow-hidden border border-white/10 bg-[#111111]`}>
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-0 w-full text-center z-10 px-6">
                      <p className="text-[#dbaf56] text-xs md:text-sm tracking-[3px] uppercase mb-2 font-serif font-medium">{item.subtitle}</p>
                      <h4 className="text-white text-xl md:text-3xl font-bold uppercase tracking-[1px] font-serif">{item.title}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <button onClick={prevCollectionSlide} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all z-20">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextCollectionSlide} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all z-20">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-14">
            <a href="#" className="border-2 border-white/40 px-8 py-3 text-sm font-serif uppercase tracking-[2px] text-white hover:bg-white hover:text-black hover:border-white transition-all inline-flex items-center">
              SHOP ALL COLLECTION <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE (PRODUCT GRID) */}
        <section className="w-full py-20 bg-[#111111] border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6 mb-14 flex flex-col items-center">
            <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-[2px]">
              <Menu className="mr-3 text-[#dbaf56]" size={28} /> YOU MIGHT ALSO LIKE
            </h3>
          </div>
          
          <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-6">
            {productGrid.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col bg-[#1a1a1a] border border-white/10 p-4 md:p-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="relative aspect-square overflow-hidden bg-[#222222] mb-5">
                  <img src={product.img1} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-90 group-hover:opacity-0" alt={product.title} />
                  <img src={product.img2} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-90" alt={`${product.title} alt`} />
                  <div className="absolute top-3 left-3 bg-[#dbaf56] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">HOT</div>
                </div>
                <h4 className="font-mono text-[13px] md:text-sm leading-relaxed text-center mt-2 text-gray-300 transition-colors duration-200 group-hover:text-white line-clamp-2 min-h-[40px] px-2">
                  {product.title}
                </h4>
                <div className="flex justify-center space-x-1 mt-4 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} className="fill-[#dbaf56] text-[#dbaf56]" />)}
                </div>
                <p className="font-serif text-lg md:text-xl font-bold text-center text-white mt-auto pt-2">${product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HANDCRAFTED CNC GALLERY */}
        <section className="w-full py-20 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6 mb-14 flex flex-col items-center">
            <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-[2px]">
              <Menu className="mr-3 text-[#dbaf56]" size={28} /> HANDCRAFTED CNC
            </h3>
          </div>

          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 px-6 h-auto md:h-[650px]">
            {collectionGrid.map((item, idx) => (
              <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-[#111111] border border-white/10 ${item.colSpan} min-h-[300px] md:min-h-[auto]`}>
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col items-start">
                  <span className="text-[#dbaf56] text-[10px] md:text-xs tracking-[3px] uppercase mb-2 font-serif font-medium">{item.subtitle}</span>
                  <h2 className="font-serif text-white uppercase text-xl md:text-2xl font-bold tracking-[2px] leading-tight">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <a href="#" className="border-2 border-white/40 px-8 py-3 text-sm font-serif uppercase tracking-[2px] text-white hover:bg-white hover:text-black hover:border-white transition-all inline-flex items-center">
              SHOP ALL WATCHES <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </section>

        {/* SOCIAL SHOWCASE & VALUE PROPS */}
        <section className="w-full py-24 bg-[#111111] border-t border-white/5">
          <div className="max-w-[1300px] mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-20">
              <div className="flex flex-col justify-center">
                <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center mb-6 tracking-[2px]">
                  <Menu className="mr-3 text-[#dbaf56]" size={28} /> HY ON SOCIAL
                </h3>
                <p className="font-sans text-gray-400 leading-relaxed mb-4 text-[15px]">
                  Follow <strong className="text-white font-medium">HY Watches</strong> on <strong className="text-white font-medium">TikTok</strong>, <strong className="text-white font-medium">Instagram</strong> and <strong className="text-white font-medium">Facebook</strong> for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
                </p>
                <p className="font-sans text-gray-400 leading-relaxed text-[15px]">
                  Every piece you see is filmed honestly so you can observe the finishing, proportions and wrist presence before making your decision.
                </p>
              </div>
              
              {[
                { type: 'TIKTOK', icon: <Play size={18} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/01.mp4', link: '#' },
                { type: 'INSTAGRAM', icon: <Instagram size={18} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/02.mp4', link: '#' },
                { type: 'FACEBOOK', icon: <Facebook size={18} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4', link: '#' }
              ].map((social, idx) => (
                <div key={idx} className="flex flex-col">
                  <a href={social.link} className="flex items-center text-white font-serif font-bold uppercase tracking-[2px] mb-5 hover:text-[#dbaf56] transition-colors text-sm">
                    <span className="mr-2 text-[#dbaf56]">{social.icon}</span> {social.type} <ChevronRight size={14} className="ml-1" />
                  </a>
                  <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden group cursor-pointer shadow-2xl border border-white/10 rounded-sm">
                    <video className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100" preload="auto" playsInline autoPlay muted loop>
                      <source src={social.videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md bg-black/20 group-hover:bg-[#dbaf56] group-hover:text-black group-hover:border-[#dbaf56] transition-all duration-300 transform group-hover:scale-110">
                        <Play size={24} className="ml-1 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VALUE PROPOSITION BADGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/10">
              <div className="flex flex-col items-center text-center px-4">
                <Package size={50} strokeWidth={1} className="text-[#dbaf56] mb-6" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-xl text-white mb-4">Free Shipping</h4>
                <p className="font-sans text-gray-400 leading-relaxed max-w-[300px] text-[15px]">Free worldwide shipping via <strong className="text-white font-medium">FedEx, DHL, UPS</strong>, delivered securely within <strong className="text-white font-medium">7-14 days</strong>.</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <CreditCard size={50} strokeWidth={1} className="text-[#dbaf56] mb-6" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-xl text-white mb-4">Pay Before Delivery</h4>
                <p className="font-sans text-gray-400 leading-relaxed max-w-[300px] text-[15px]">Easy and secure payments via <strong className="text-white font-medium">PayPal, Crypto, Visa & MasterCard</strong>. 100% safe and protected.</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <ShieldCheck size={50} strokeWidth={1} className="text-[#dbaf56] mb-6" />
                <h4 className="font-serif font-bold uppercase tracking-[2px] text-xl text-white mb-4">Warranty & Returns</h4>
                <p className="font-sans text-gray-400 leading-relaxed max-w-[300px] text-[15px]"><strong className="text-white font-medium">2-5 year warranty</strong> on all products. <strong className="text-white font-medium">100% replacement</strong> within <strong className="text-white font-medium">7 days</strong> for delivery defects.</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#050505] pt-20 border-t border-white/10 flex-shrink-0">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 pb-16">
            
            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[3px] text-xl font-bold mb-6 text-white">HY WATCHES</h3>
              <p className="font-sans text-gray-400 text-[15px] leading-relaxed pr-4">
                Confidently operating from our headquarters in <strong className="text-white font-medium">Australia</strong>, we are proud to be trusted and selected to distribute <strong className="text-[#dbaf56] font-medium">finely crafted products of exceptional quality</strong> to customers worldwide, helping to elevate the luxury experience and make premium products more accessible than ever.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-6 text-white">CONTACT INFO</h3>
              <div className="font-sans text-gray-400 text-[15px] space-y-3">
                <p><strong className="text-white font-medium uppercase tracking-wide">HY SYSTEMS Australia</strong><br/><span className="mt-1 inline-block">Australia</span></p>
                <p className="pt-2"><strong className="text-white font-medium">Email:</strong><br/><a href="mailto:info.hywatches@gmail.com" className="hover:text-[#dbaf56] transition-colors">info.hywatches@gmail.com</a></p>
                <p><strong className="text-white font-medium">WhatsApp:</strong><br/><span className="hover:text-[#dbaf56] transition-colors cursor-pointer">(+61) 000 000 000</span></p>
              </div>
              <div className="flex space-x-3 mt-8">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black transition-all duration-300"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#dbaf56] hover:border-[#dbaf56] hover:text-black transition-all duration-300"><Facebook size={18} /></a>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-6 text-white">MORE INFO</h3>
              <ul className="space-y-4 font-sans text-[15px] font-medium">
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> Social Media</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> How To Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> Payment Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span> Service & Warranty</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif uppercase tracking-[2px] text-lg font-bold mb-6 text-white">COLLECTIONS</h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-2 font-sans text-[15px] font-medium">
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> All Collections</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Hublot</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Rolex</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Cartier</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Omega</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Tudor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Patek Philippe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Audemars Piguet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Vacheron</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2.5"></span> Richard Mille</a></li>
              </ul>
            </div>

          </div>
        </div>
        
        <div className="w-full bg-[#000000] py-6 border-t border-white/10 text-center">
          <div className="container mx-auto px-6">
            <p className="font-sans text-[11px] md:text-xs text-gray-500 uppercase tracking-[3px] font-medium">
              ©2026, HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}
