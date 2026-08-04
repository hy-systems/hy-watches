import React, { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe, ShoppingBag, Menu, ChevronLeft, ChevronRight, Star, Play, Package, CreditCard, ShieldCheck, X, Instagram, Facebook } from 'lucide-react'

// Data Models
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
    <main className="relative w-full min-h-screen bg-[#f9f9f9] font-sans text-black selection:bg-[#dbaf56] selection:text-white">
      
      {/* INJECTED FLATSOME-STYLE CSS OVERRIDES */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary: #000000;
          --accent: #dbaf56;
        }
        body { font-family: 'Sarabun', sans-serif; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Roboto Condensed', sans-serif; }
        .font-mono { font-family: 'Lexend', sans-serif; }
        .nav-link { letter-spacing: 2px; font-size: 12px; font-weight: 500; }
        .btn-outline { border: 2px solid black; padding: 6px 20px; letter-spacing: 3px; font-family: 'Roboto Condensed'; text-transform: uppercase; transition: all 0.3s; }
        .btn-outline:hover { background: black; color: white; }
        .product-card:hover .hover-img { opacity: 1; }
        .product-card:hover .default-img { opacity: 0; }
        .collection-overlay { background: linear-gradient(transparent, rgba(0,0,0,0.8)); }
      `}} />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-[70px] bg-[#262626]/95 backdrop-blur-md shadow-md' : 'h-[83px] bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto w-full h-full px-6 flex justify-between items-center">
          <a href="#" className={`font-serif uppercase tracking-[2.5px] text-2xl font-bold flex-shrink-0 transition-colors duration-300 ${isScrolled ? 'text-[#dbaf56]' : 'text-white drop-shadow-md'}`}>
            HY WATCHES
          </a>
          
          <nav className="hidden md:flex items-center h-full">
            {['SHOP', 'BRANDS', 'COLLECTIONS', 'HOW TO ORDER', 'ABOUTS'].map((item) => (
              <div key={item} className="relative h-full flex items-center group mx-3.5">
                <a href="#" className={`flex items-center nav-link transition-colors duration-200 group-hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                  {item}
                  {['BRANDS', 'COLLECTIONS', 'ABOUTS'].includes(item) && <ChevronDown size={12} className="ml-1" />}
                </a>
                {['BRANDS', 'COLLECTIONS', 'ABOUTS'].includes(item) && (
                  <div className="absolute top-full left-0 bg-white shadow-xl min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-4">
                      {['Rolex', 'Patek Philippe', 'Richard Mille', 'Audemars Piguet'].map(sub => (
                        <a key={sub} href="#" className="block px-6 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors">{sub}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-5">
            <Search size={18} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
            <Globe size={18} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
            <ShoppingBag size={18} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} />
            <Menu size={24} className={`cursor-pointer md:hidden transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`} onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl flex flex-col z-[101] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-[#f9f9f9]">
              <span className="font-serif uppercase tracking-[2.5px] font-bold text-black text-xl">HY WATCHES</span>
              <X size={24} className="cursor-pointer text-black hover:text-[#dbaf56] transition-colors" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-2">
              {['SHOP', 'BRANDS', 'COLLECTIONS', 'HOW TO ORDER', 'ABOUTS'].map((item) => (
                <a key={item} href="#" className="px-6 py-4 font-serif uppercase text-base tracking-[1px] text-black border-b border-gray-100 hover:bg-gray-50 hover:text-[#dbaf56] transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CINEMATIC HERO */}
      <section className="relative w-full h-[60vh] md:h-screen bg-black overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover opacity-80" autoPlay muted loop playsInline>
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </section>

      {/* ANNOUNCEMENT */}
      <div className="relative w-full bg-black py-4 border-t border-white/10 z-30">
        <p className="text-center text-white text-[12px] tracking-[2.5px] uppercase font-sans">
          Complimentary Travel Case with Every Watch Purchase
        </p>
      </div>

      {/* WELCOME */}
      <section className="w-full py-16 md:py-24 bg-white px-6 border-b border-gray-100">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-serif uppercase text-3xl md:text-5xl mb-6 text-black tracking-wide font-bold">WELCOME TO HY WATCHES</h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">Providing perfectly customized products.</p>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">We also buy and appraise genuine watches and luxury items.</p>
        </div>
      </section>

      {/* POPULAR COLLECTIONS SLIDER */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-10 flex flex-col items-center">
          <h3 className="font-serif uppercase text-2xl md:text-3xl text-black font-bold flex items-center tracking-wide">
            <Menu className="mr-3" size={24} /> POPULAR COLLECTIONS
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
                <div key={item.id} className={`${displayClass} w-full md:w-1/3 relative group cursor-pointer overflow-hidden`}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 collection-overlay opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-10 left-0 w-full text-center z-10 px-4">
                    <p className="text-white/80 text-sm tracking-[3px] uppercase mb-2 font-serif">{item.subtitle}</p>
                    <h4 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider font-serif">{item.title}</h4>
                  </div>
                </div>
              )
            })}
          </div>
          
          <button onClick={prevCollectionSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-20">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextCollectionSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-20">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-outline text-black inline-flex items-center">
            SHOP ALL COLLECTION <ChevronRight size={16} className="ml-2" />
          </a>
        </div>
      </section>

      {/* YOU MIGHT ALSO LIKE (PRODUCT GRID) */}
      <section className="w-full py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
          <h3 className="font-serif uppercase text-2xl md:text-3xl text-black font-bold flex items-center tracking-wide">
            <Menu className="mr-3" size={24} /> YOU MIGHT ALSO LIKE
          </h3>
        </div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {productGrid.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer flex flex-col bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img src={product.img1} className="default-img absolute inset-0 w-full h-full object-contain transition-opacity duration-500" alt={product.title} />
                <img src={product.img2} className="hover-img absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500" alt={`${product.title} alt`} />
              </div>
              <h4 className="font-mono text-sm leading-relaxed text-center mt-2 text-black transition-colors duration-200 group-hover:text-[#dbaf56] line-clamp-2 min-h-[40px]">
                {product.title}
              </h4>
              <div className="flex justify-center space-x-1 mt-3 mb-2">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} className="fill-black text-black" />)}
              </div>
              <p className="font-serif text-lg font-bold text-center text-black mt-auto pt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HANDCRAFTED CNC GALLERY */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
          <h3 className="font-serif uppercase text-2xl md:text-3xl text-black font-bold flex items-center tracking-wide">
            <Menu className="mr-3" size={24} /> ALL COLLECTIONS
          </h3>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
          {collectionGrid.map((item, idx) => (
            <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-black ${item.colSpan} min-h-[300px] md:min-h-[auto]`}>
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <h2 className="font-serif text-white uppercase text-2xl font-bold tracking-[2px]">{item.title}</h2>
                <p className="font-sans text-white/80 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-outline text-black inline-flex items-center">
            SHOP ALL WATCHES <ChevronRight size={16} className="ml-2" />
          </a>
        </div>
      </section>

      {/* SOCIAL SHOWCASE */}
      <section className="w-full py-20 bg-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col justify-center">
              <h3 className="font-serif uppercase text-2xl text-black font-bold flex items-center mb-6">
                <Menu className="mr-3" size={24} /> HY ON SOCIAL
              </h3>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">
                Follow <strong>HY Watches</strong> on <strong>TikTok</strong>, <strong>Instagram</strong> and <strong>Facebook</strong> for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                Every piece you see is filmed honestly so you can observe the finishing, proportions and wrist presence before making your decision.
              </p>
            </div>
            
            {[
              { type: 'TIKTOK', icon: <Play size={20} />, src: 'https://lucytimepieces.com/wp-content/uploads/2026/03/2b2e1b0541f39a9e492d207fbee49c43.jpg', link: '#' },
              { type: 'INSTA', icon: <Instagram size={20} />, src: 'https://lucytimepieces.com/wp-content/uploads/2026/06/Snapinsta.app_449296172_325308890635793_4868141041585460502_n_1080.jpg', link: '#' },
              { type: 'FACEBOOK', icon: <Facebook size={20} />, src: 'https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg', link: '#' }
            ].map((social, idx) => (
              <div key={idx} className="flex flex-col">
                <a href={social.link} className="flex items-center text-black font-serif font-bold uppercase tracking-wider mb-4 hover:text-[#dbaf56] transition-colors">
                  <span className="mr-2">{social.icon}</span> {social.type} <ChevronRight size={16} className="ml-1" />
                </a>
                <div className="relative aspect-[3/4] bg-black overflow-hidden group cursor-pointer shadow-lg rounded-sm">
                  <img src={social.src} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={`${social.type} post`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VALUE PROPOSITION BADGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-gray-300">
            <div className="flex flex-col items-center text-center">
              <Package size={48} strokeWidth={1} className="text-black mb-6" />
              <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-black mb-3">Free Shipping</h4>
              <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]">Free worldwide shipping via <strong>FedEx, DHL, UPS</strong>, delivered within <strong>7-14 days</strong>.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CreditCard size={48} strokeWidth={1} className="text-black mb-6" />
              <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-black mb-3">Pay Before Delivery</h4>
              <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]">Easy and secure payments via <strong>PayPal, Crypto, Visa & MasterCard</strong>. 100% safe and protected.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck size={48} strokeWidth={1} className="text-black mb-6" />
              <h4 className="font-serif font-bold uppercase tracking-[1px] text-xl text-black mb-3">Warranty & Returns</h4>
              <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]"><strong>2-5 year warranty</strong> on all products. <strong>100% replacement</strong> within <strong>7 days</strong> for delivery defects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-white pt-20 pb-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* BRAND */}
            <div>
              <h4 className="font-serif font-bold uppercase tracking-[2px] text-xl mb-6 text-black">HY WATCHES</h4>
              <p className="font-sans text-gray-600 leading-relaxed text-sm">
                Confidently operating from our headquarters in <strong>Boronia, VIC</strong>, we are proud to be trusted and selected to distribute <strong>finely crafted products of exceptional quality</strong> to customers worldwide, helping to elevate the luxury experience.
              </p>
            </div>
            
            {/* CONTACT */}
            <div>
              <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg mb-6 text-black">CONTACT INFO</h4>
              <div className="font-sans text-sm text-gray-600 space-y-3">
                <p className="font-bold text-black uppercase">HY WATCHES Australia</p>
                <p>80 Albert Avenue</p>
                <p>Boronia, VIC 3155</p>
                <p className="pt-2"><strong className="text-black">Email:</strong> support@hysystems.com.au</p>
                <p><strong className="text-black">Zalo / WhatsApp:</strong> (+61) 400 000 000</p>
              </div>
              <div className="flex space-x-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><Play size={18} /></a>
              </div>
            </div>
            
            {/* LINKS */}
            <div>
              <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg mb-6 text-black">MORE INFO</h4>
              <div className="flex flex-col space-y-3 font-sans text-sm font-medium">
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Social Media</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">How To Order</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Payment Policy</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Shipping Policy</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Service & Warranty</a>
              </div>
            </div>
            
            {/* COLLECTIONS */}
            <div>
              <h4 className="font-serif font-bold uppercase tracking-[2px] text-lg mb-6 text-black">COLLECTIONS</h4>
              <div className="flex flex-col space-y-3 font-sans text-sm font-medium">
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">All Collections</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Hublot</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Rolex</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Cartier</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Omega</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Tudor</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Patek Philippe</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Audemars Piguet</a>
                <a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors">Richard Mille</a>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center flex flex-col items-center">
            <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">©2026, HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
