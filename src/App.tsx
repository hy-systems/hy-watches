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
    <main className="relative w-full min-h-screen bg-black font-sans text-white selection:bg-[#dbaf56] selection:text-white">
      
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary: #ffffff;
          --accent: #dbaf56;
        }
        body { font-family: 'Sarabun', sans-serif; background-color: #000000; color: #ffffff; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Roboto Condensed', sans-serif; }
        .font-mono { font-family: 'Lexend', sans-serif; }
        .nav-link { letter-spacing: 2px; font-size: 12px; font-weight: 500; }
        .btn-outline { border: 2px solid white; padding: 6px 20px; letter-spacing: 3px; font-family: 'Roboto Condensed'; text-transform: uppercase; transition: all 0.3s; color: white; }
        .btn-outline:hover { background: white; color: black; }
        .product-card:hover .hover-img { opacity: 1; }
        .product-card:hover .default-img { opacity: 0; }
        .collection-overlay { background: linear-gradient(transparent, rgba(0,0,0,0.8)); }
      `}} />

      <div className="fixed right-3 bottom-5 z-[99] flex flex-col gap-3">
        <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-white border border-white/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-white border border-white/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-white border border-white/20">
          <Instagram size={20} color="black" />
        </a>
      </div>

      <header id="header" className="header transparent has-transparent has-sticky sticky-jump">
        <div className="header-wrapper">
          <div id="masthead" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-[70px] bg-[#111111]/95 backdrop-blur-md shadow-md border-b border-white/10' : 'h-[83px] bg-transparent'}`}>
            <div className="header-inner flex justify-between items-center max-w-[1200px] mx-auto px-6 h-full">
              
              <div id="logo" className="flex-shrink-0 w-[200px]">
                <a href="#" className={`font-serif uppercase tracking-[2.5px] text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#dbaf56]' : 'text-white drop-shadow-md'}`}>
                  HY WATCHES
                </a>
              </div>

              <div className="hidden md:flex flex-grow justify-center">
                <ul className="header-nav header-nav-main nav flex space-x-7 items-center h-full">
                  <li className="menu-item relative group h-full flex items-center">
                    <a href="#" className="flex items-center nav-link transition-colors hover:text-[#dbaf56] text-white">
                      SHOP
                    </a>
                  </li>
                  <li className="menu-item relative group h-full flex items-center">
                    <a href="#" className="flex items-center nav-link transition-colors hover:text-[#dbaf56] text-white">
                      BRANDS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-[100%] left-0 bg-black border border-white/20 shadow-xl min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Rolex</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Tudor</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Hublot</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Omega</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Cartier</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Patek Philippe</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Audemars Piguet</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Vacheron Constantin</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Richard Mille</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Jaeger Lecoultre</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">Franck Muller</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">IWC</a></li>
                    </ul>
                  </li>
                  <li className="menu-item relative group h-full flex items-center">
                    <a href="#" className="flex items-center nav-link transition-colors hover:text-[#dbaf56] text-white">
                      COLLECTIONS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-[100%] left-0 bg-black border border-white/20 shadow-xl min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">HY PICKS</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">CUSTOMIZE PRODUCTS</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">CUSTOMIZE DIAMOND</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">MEN'S</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">WOMEN'S</a></li>
                    </ul>
                  </li>
                  <li className="menu-item relative group h-full flex items-center">
                    <a href="#" className="flex items-center nav-link transition-colors hover:text-[#dbaf56] text-white">
                      HOW TO ORDER
                    </a>
                  </li>
                  <li className="menu-item relative group h-full flex items-center">
                    <a href="#" className="flex items-center nav-link transition-colors hover:text-[#dbaf56] text-white">
                      ABOUTS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-[100%] left-0 bg-black border border-white/20 shadow-xl min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">INFO US</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">CONTACT</a></li>
                      <li><a href="#" className="block px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors">SOCIAL MEDIA</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-5">
                <Search size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
                <Globe size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
                <ShoppingBag size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
                <Menu size={20} className={`cursor-pointer md:hidden transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} onClick={() => setIsMobileMenuOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] transition-opacity duration-300 flex">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-[300px] h-full bg-black border-l border-white/10 shadow-2xl flex flex-col z-[101] ml-auto">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-serif uppercase tracking-[2px] font-bold text-lg text-white">MENU</span>
              <X size={24} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-4 overflow-y-auto">
              <div className="px-6 pb-4 mb-4 border-b border-white/10">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="w-full border border-white/30 bg-transparent h-10 px-3 text-sm text-white focus:outline-none focus:border-white" />
                  <Search size={16} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium text-white hover:text-[#dbaf56]">SHOP</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium text-white hover:text-[#dbaf56]">BRANDS</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium text-white hover:text-[#dbaf56]">COLLECTIONS</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium text-white hover:text-[#dbaf56]">HOW TO ORDER</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium text-white hover:text-[#dbaf56]">ABOUTS</a>
            </div>
          </div>
        </div>
      )}

      <main id="main">
        <div id="content" role="main">
          
          <div className="banner has-hover has-video relative w-full h-screen bg-black">
            <div className="banner-inner fill h-full w-full absolute inset-0">
              <div className="banner-bg fill h-full w-full">
                <video className="video-bg fill visible w-full h-full object-cover opacity-60" preload="auto" playsInline autoPlay muted loop>
                  <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
                </video>
                <div className="overlay absolute inset-0 bg-black/40"></div>
              </div>
              <div className="banner-layers container absolute inset-0 flex items-center justify-center">
                <div className="text-box banner-layer text-center z-10 w-[60%]">
                  <div className="text-box-content text dark">
                    <div className="text-inner text-center">
                      <span className="text-[14px] md:text-[16px] tracking-[3px] uppercase text-gray-300 mb-2 font-serif block">POPULAR COLLECTIONS</span>
                      <h1 className="text-5xl md:text-7xl font-bold uppercase text-white font-serif drop-shadow-lg leading-tight">SERIES ALPHA</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner has-hover relative bg-[#111111] py-4 border-t border-b border-white/10">
            <div className="text-box text-center">
              <h4 className="title text-gray-300 text-[12px] tracking-[2.5px] uppercase font-sans m-0">
                Complimentary Travel Case with Every Watch Purchase
              </h4>
            </div>
          </div>

          <div className="row align-center py-16 md:py-24 px-4 bg-[#0a0a0a] border-b border-white/10">
            <div className="col medium-7 small-12 large-7 max-w-[800px] mx-auto">
              <div className="col-inner text-center">
                <h2 className="uppercase font-serif text-3xl md:text-4xl mb-6 tracking-wide font-bold text-white">
                  Welcome to HY WATCHES
                </h2>
                <p className="font-sans text-gray-400 text-lg mb-2">
                  Providing perfectly customized products.
                </p>
                <p className="font-sans text-gray-400 text-lg">
                  We also buy and appraise genuine watches and luxury items.
                </p>
              </div>
            </div>
          </div>

          <section className="section py-16 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 mb-10 flex flex-col items-center">
              <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-wide">
                <Menu className="mr-3 text-white" size={24} /> POPULAR COLLECTIONS
              </h3>
            </div>
            
            <div className="relative max-w-[1400px] mx-auto px-12">
              <div className="flex overflow-hidden gap-4 h-[500px]">
                {popularCollections.map((item, index) => {
                  let displayClass = 'hidden'
                  if (index === activeCollectionSlide || index === (activeCollectionSlide + 1) % popularCollections.length || index === (activeCollectionSlide + 2) % popularCollections.length) {
                    displayClass = 'flex'
                  }
                  return (
                    <div key={item.id} className={`${displayClass} w-full md:w-1/3 relative group cursor-pointer overflow-hidden border border-white/10`}>
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                      <div className="absolute inset-0 collection-overlay opacity-90 transition-opacity"></div>
                      <div className="absolute bottom-10 left-0 w-full text-center z-10 px-4">
                        <p className="text-gray-300 text-sm tracking-[3px] uppercase mb-2 font-serif">{item.subtitle}</p>
                        <h4 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider font-serif">{item.title}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <button onClick={prevCollectionSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-white text-black shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-20">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextCollectionSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-white text-black shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-20">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="btn-outline inline-flex items-center">
                SHOP ALL COLLECTION <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
          </section>

          <section className="section py-16 bg-[#111111] border-t border-white/5">
            <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
              <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-wide">
                <Menu className="mr-3 text-white" size={24} /> YOU MIGHT ALSO LIKE
              </h3>
            </div>
            
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
              {productGrid.map((product) => (
                <div key={product.id} className="product-card group cursor-pointer flex flex-col bg-[#1a1a1a] border border-white/5 p-4 shadow-md hover:shadow-white/10 transition-shadow duration-300">
                  <div className="relative aspect-square overflow-hidden bg-[#222222] mb-4">
                    <img src={product.img1} className="default-img absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-90" alt={product.title} />
                    <img src={product.img2} className="hover-img absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500" alt={`${product.title} alt`} />
                  </div>
                  <h4 className="font-mono text-sm leading-relaxed text-center mt-2 text-white transition-colors duration-200 group-hover:text-[#dbaf56] line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h4>
                  <div className="flex justify-center space-x-1 mt-3 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} className="fill-white text-white" />)}
                  </div>
                  <p className="font-serif text-lg font-bold text-center text-white mt-auto pt-2">${product.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full py-16 bg-[#0a0a0a] border-t border-white/5">
            <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
              <h3 className="font-serif uppercase text-2xl md:text-3xl text-white font-bold flex items-center tracking-wide">
                <Menu className="mr-3 text-white" size={24} /> ALL COLLECTIONS
              </h3>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
              {collectionGrid.map((item, idx) => (
                <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-black border border-white/10 ${item.colSpan} min-h-[300px] md:min-h-[auto]`}>
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 z-10">
                    <h2 className="font-serif text-white uppercase text-2xl font-bold tracking-[2px]">{item.title}</h2>
                    <p className="font-sans text-gray-300 text-sm mt-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="btn-outline inline-flex items-center">
                SHOP ALL WATCHES <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
          </section>

          <section className="w-full py-20 bg-[#111111] border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif uppercase text-2xl text-white font-bold flex items-center mb-6">
                    <Menu className="mr-3 text-white" size={24} /> HY ON SOCIAL
                  </h3>
                  <p className="font-sans text-gray-400 leading-relaxed mb-4">
                    Follow <strong className="text-white">HY Watches</strong> on <strong className="text-white">TikTok</strong>, <strong className="text-white">Instagram</strong> and <strong className="text-white">Facebook</strong> for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
                  </p>
                  <p className="font-sans text-gray-400 leading-relaxed">
                    Every piece you see is filmed honestly so you can observe the finishing, proportions and wrist presence before making your decision.
                  </p>
                </div>
                
                {[
                  { type: 'TIKTOK', icon: <Play size={20} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/01.mp4', link: '#' },
                  { type: 'INSTA', icon: <Instagram size={20} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2026/03/02.mp4', link: '#' },
                  { type: 'FACEBOOK', icon: <Facebook size={20} />, videoSrc: 'https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4', link: '#' }
                ].map((social, idx) => (
                  <div key={idx} className="flex flex-col">
                    <a href={social.link} className="flex items-center text-white font-serif font-bold uppercase tracking-wider mb-4 hover:text-[#dbaf56] transition-colors">
                      <span className="mr-2">{social.icon}</span> {social.type} <ChevronRight size={16} className="ml-1" />
                    </a>
                    <div className="relative aspect-[3/4] bg-black overflow-hidden group cursor-pointer shadow-lg rounded-sm border border-white/10">
                      <video className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" preload="auto" playsInline autoPlay muted loop>
                        <source src={social.videoSrc} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                          <Play size={24} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-white/10">
                <div className="flex flex-col items-center text-center">
                  <Package size={48} strokeWidth={1} className="text-white mb-6" />
                  <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-white mb-3">Free Shipping</h4>
                  <p className="font-sans text-gray-400 leading-relaxed max-w-[280px]">Free worldwide shipping via <strong className="text-white">FedEx, DHL, UPS</strong>, delivered within <strong className="text-white">7-14 days</strong>.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <CreditCard size={48} strokeWidth={1} className="text-white mb-6" />
                  <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-white mb-3">Pay Before Delivery</h4>
                  <p className="font-sans text-gray-400 leading-relaxed max-w-[280px]">Easy and secure payments via <strong className="text-white">PayPal, Crypto, Visa & MasterCard</strong>. 100% safe and protected.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck size={48} strokeWidth={1} className="text-white mb-6" />
                  <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-white mb-3">Warranty & Returns</h4>
                  <p className="font-sans text-gray-400 leading-relaxed max-w-[280px]"><strong className="text-white">2-5 year warranty</strong> on all products. <strong className="text-white">100% replacement</strong> within <strong className="text-white">7 days</strong> for delivery defects.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer id="footer" className="footer-wrapper w-full bg-[#0a0a0a] pt-16 border-t border-white/10">
        <section className="section footer-section">
          <div className="container mx-auto max-w-[1200px] px-6">
            <div className="row grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
              
              <div className="col">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-white">HY WATCHES</h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed pr-4">
                    Confidently operating from our headquarters in <strong className="text-white">Australia</strong>, we are proud to be trusted and selected to distribute <strong className="text-white">finely crafted products of exceptional quality</strong> to customers worldwide, helping to elevate the luxury experience and make premium products more accessible than ever.
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-white">CONTACT INFORMATION</h3>
                  <div className="font-sans text-gray-400 text-sm space-y-2">
                    <p><strong className="text-white uppercase">HY SYSTEMS Australia</strong><br/>Australia</p>
                    <p className="pt-2"><strong className="text-white">Email:</strong> info.hywatches@gmail.com</p>
                    <p><strong className="text-white">WhatsApp:</strong> (+61) 000 000 000</p>
                  </div>
                  <div className="flex space-x-3 mt-6">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><Facebook size={18} /></a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-white">MORE INFO</h3>
                  <ul className="space-y-3 font-sans text-sm font-medium">
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Social Media</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">How To Order</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Payment Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Shipping Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Service & Warranty</a></li>
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-white">COLLECTIONS</h3>
                  <ul className="space-y-3 font-sans text-sm font-medium columns-2">
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">All Collections</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Hublot</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Rolex</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Cartier</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Omega</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Tudor</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Patek Philippe</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Audemars Piguet</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Vacheron</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#dbaf56] transition-colors block">Richard Mille</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="absolute-footer bg-[#050505] py-6 border-t border-white/10 text-center">
          <div className="container mx-auto">
            <div className="font-sans text-xs text-gray-500 uppercase tracking-widest font-medium">
              ©2026, HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
